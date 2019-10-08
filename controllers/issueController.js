
const mongoose = require('mongoose');
const logger = require('../libs/loggerLib');
const shortid = require('shortid');
const time = require('../libs/timeLib');
const response = require('../libs/responseLib');
const validateInput = require('../libs/paramsValidationLib');
const check = require('../libs/checkLib');
const passwordLib = require('../libs/generatePasswordLib');
const token = require('../libs/tokenLib');
const AuthModel = mongoose.model('Auth');

/* Models */
const IssueModel = mongoose.model('Issue');
const CommentModel = mongoose.model('Comment');
const WatcherModel = mongoose.model('Watcher');
const NotificationModel = mongoose.model('Notification');




let createIssue = (req, res) => {
	let issueCreationFunction = () => {
		return new Promise((resolve, reject) => {
			console.log(req.body);
			if (
				check.isEmpty(req.body.title) ||
        check.isEmpty(req.body.status) ||
				check.isEmpty(req.body.description) ||
				check.isEmpty(req.body.assignee)||
				check.isEmpty(req.body.reporter)||
				check.isEmpty(req.body.images)
			) {
				console.log('403, forbidden request');
				let apiResponse = response.generate(true, 'required parameters are missing', 403, null);
				reject(apiResponse);
			} else {
						var today = Date.now();
						let issueId = shortid.generate();

						let newIssue = new IssueModel({
							issueId: issueId,
              userId: req.body.userId,
							title: req.body.title,
							status: req.body.status,
							description: req.body.description,
							assignee: req.body.assignee,
							reporter: req.body.reporter,
					    images: req.body.images,
							createdOn: time.now(),
							lastModified: today
						}); // end issue model
				
						let tags = req.body.tags != undefined && req.body.tags != null && req.body.tags != '' ? req.body.tags.split(',') : [];
						newIssue.tags = tags;

					newIssue.save((err, newUser) => {
						if (err) {
							console.log(err);
							logger.error(err.message, 'issueController: createIssue', 10);
							let apiResponse = response.generate(true, 'Failed to create new Issue', 500, null);
							reject(apiResponse);
						} else {
							let newIssueObj = newIssue.toObject();
							resolve(newIssueObj);
						}
					}); // end issue save
					}
		}); // end new issue promise
	}; // end create issue function

	// making promise call.
	issueCreationFunction()
		.then(result => {
			let apiResponse = response.generate(false, 'Issue Posted successfully', 200, result);
			res.send(apiResponse);
		})
		.catch(error => {
			console.log(error);
			res.send(error);
		});
};

let getAllIssue = (req, res) => {
	console.log(req.params.userId);
		IssueModel.aggregate([
			{ 
				$match: { $or: [{
													"userId": req.params.userId
														}, 
														{
													'reporter':  req.params.userId
											}]
							}
			 },
			{
				$lookup: {
					from: 'users',
					localField: 'reporter',
					foreignField: 'userId',
					as: 'reporter_details'
				}
			},
			{
				$lookup: {
					from: 'users',
					localField: 'assignee',
					foreignField: 'userId',
					as: 'assignee_details'
				}
			}
		]).exec((err, result) => {
			if (err) {
				console.log(err);
				logger.error(err.message, 'Issue Controller: getAllIssue', 10);
				let apiResponse = response.generate(true, 'Failed To Find Issue Details', 500, null);
				res.send(apiResponse);
			} else if (check.isEmpty(result)) {
				logger.info('No Issue Found', 'Issue Controller: getAllIssue');
				let apiResponse = response.generate(true, 'No Issue Found', 404, null);
				res.send(apiResponse);
			} else {
				let apiResponse = response.generate(false, 'All Issue Details Found', 200, result);
				res.send(apiResponse);
			}
		});
};




/* Get single Issue details */
let getSingleIssue = (req, res) => {
	console.log(req.params.issueId + 'gfcgfdx');

		IssueModel.aggregate([
			{
				$match: {
							issueId: req.params.issueId
						},
			},
			{
				$lookup: {
					from: 'users',
					localField: 'reporter',
					foreignField: 'userId',
					as: 'reporter_details'
				}
			},
			{
				$lookup: {
					from: 'users',
					localField: 'assignee',
					foreignField: 'userId',
					as: 'assignee_details'
				}
			}
		]).exec((err, result) => {
			if (err) {
				console.log(err);
				logger.error(err.message, 'Issue Controller: getSingleIssue', 10);
				let apiResponse = response.generate(true, 'Failed To Find Issue Details', 500, null);
				res.send(apiResponse);
			} else if (check.isEmpty(result)) {
				logger.info('No Issue Found', 'Issue Controller:getSingleIssue');
				let apiResponse = response.generate(true, 'No Issue Found', 404, null);
				res.send(apiResponse);
			} else {
				let apiResponse = response.generate(false, 'Issue Details Found', 200, result[0]);
				res.send(apiResponse);
			}
		});
}; // end get single Issue


let deleteIssue = (req, res) => {
	IssueModel.findOneAndRemove({ issueId: req.params.issueId }).exec((err, result) => {
		if (err) {
			console.log(err);
			logger.error(err.message, 'Issue Controller: deleteIssue', 10);
			let apiResponse = response.generate(true, 'Failed To delete Issue', 500, null);
			res.send(apiResponse);
		} else if (check.isEmpty(result)) {
			logger.info('No Issue Found', 'Issue Controller: deleteIssue');
			let apiResponse = response.generate(true, 'No User Found', 404, null);
			res.send(apiResponse);
		} else {
			let apiResponse = response.generate(false, 'Deleted the Issue successfully', 200, result);
			res.send(apiResponse);
		}
	}); 
}; // end delete Issue

let editIssue = (req, res) => {
	let options = req.body;
	IssueModel.update({ issueId: req.params.issueId }, options).exec((err, result) => {
		if (err) {
			console.log(err);
			logger.error(err.message, 'Issue Controller:editIssue', 10);
			let apiResponse = response.generate(true, 'Failed To edit Issue details', 500, null);
			res.send(apiResponse);
		} else if (check.isEmpty(result)) {
			logger.info('No Issue Found', 'Issue Controller: editIssue');
			let apiResponse = response.generate(true, 'No Issue Found', 404, null);
			res.send(apiResponse);
		} else {
			let apiResponse = response.generate(false, 'Issue details edited', 200, result);
			res.send(apiResponse);
		}
	});
};   // end edit Issue


let createComment = (req, res) => {
	let issueCreationFunction = () => {
		return new Promise((resolve, reject) => {
			console.log(req.body);
			if (
				check.isEmpty(req.body.description) 
			) {
				console.log('403, forbidden request');
				let apiResponse = response.generate(true, 'required parameters are missing', 403, null);
				reject(apiResponse);
			} else {
						var today = Date.now();
            let commentId = shortid.generate();
            let notificId = shortid.generate();
						
						let newComment = new CommentModel({
							issueId: req.body.issueId,
							userId: req.body.userId,
							commentId: commentId,
							description: req.body.description,
							commentName: req.body.commentName,
							images: req.body.images,
							createdOn: time.now(),
							lastModified: today
						}); // end comment model

						let tags = req.body.tags != undefined && req.body.tags != null && req.body.tags != '' ? req.body.tags.split(',') : [];
						newComment.tags = tags;

						newComment.save((err, newUser) => {
							if (err) {
								console.log(err);
								logger.error(err.message, 'issueController: createComment', 10);
								let apiResponse = response.generate(true, 'Failed to create new Comment', 500, null);
								reject(apiResponse);
							} else {

								
								let newNotification = new NotificationModel({
																					issueId: req.body.issueId,
																					userId: req.body.userId,
																					commentId: commentId,
																					notificId: notificId,
																					status: req.body.status,
																					createdOn: time.now(),
																					lastModified: today
																	});
								newNotification.save((err, newUser) => {
									if (err) {
										console.log(err);
										logger.error(err.message, 'issueController: createComment', 10);
										let apiResponse = response.generate(true, 'Failed to create new Comment', 500, null);
										reject(apiResponse);
									} else {
												let newCommentObj = newComment.toObject();
												resolve(newCommentObj);
									}	
								});	
							}
						}); // end comment save
					}
		}); // end new comment promise
	}; // end create comment function

	// making promise call.
	issueCreationFunction()
		.then(result => {
			let apiResponse = response.generate(false, 'Comment Posted successfully', 200, result);
			res.send(apiResponse);
		})
		.catch(error => {
			console.log(error);
			res.send(error);
		});
};


let getUserDetails = (req, res) => {
	console.log(req, 'vidya')
    CommentModel.find({issueId:req.params.issueId})
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Issue Controller: getUserDetails', 10)
                let apiResponse = response.generate(true, 'Failed To Find Comment Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Comment Found', 'Issue Controller: getUserDetails')
                let apiResponse = response.generate(true, 'No Comment Found', 404, null)
                res.send(apiResponse)
            } else {
										let apiResponse = response.generate(false, 'All Comment Details Found', 200, result);
										res.send(apiResponse);
            }
        })
};

let getAllComments = (req, res) => {
	
    CommentModel.find({issueId:req.params.issueId})
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Issue Controller: getAllComments', 10)
                let apiResponse = response.generate(true, 'Failed To Find Comment Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Comment Found', 'Issue Controller: getAllComments')
                let apiResponse = response.generate(true, 'No Comment Found', 404, null)
                res.send(apiResponse)
            } else {
										let options = { status: 0 };
										NotificationModel.update({ notificId: req.params.notifyid }, options).exec((err, results) => {
													if (err) {
															let apiResponse = response.generate(true, 'Failed To update Notification details', 500, null);
															res.send(apiResponse);
														} else {
															let apiResponse = response.generate(false, 'Notification details updated', 200, result);
															res.send(apiResponse);
													}
											});
									}
							})
			}




let createWatcher = (req, res) => {
	let watcherCreationFunction = () => {
		return new Promise((resolve, reject) => {
			WatcherModel.findOne({ reporter: req.body.reporter, issueId: req.body.issueId }).exec((err, retrievedUserDetails) => {
				console.log(req.body);
				if (err) {
					logger.error(err.message, 'issueController: createWatcher', 10);
					let apiResponse = response.generate(true, 'Failed To Create Watcher', 500, null);
					reject(apiResponse);
				} else if (check.isEmpty(retrievedUserDetails)) {
					var today = Date.now();
					let watcherId = shortid.generate();

					let newWatcher = new WatcherModel({
						reporter: req.body.reporter,
						watcherId: watcherId,
						issueId: req.body.issueId,
						userId: req.body.userId,
						createdOn: time.now(),
						lastModified: today
					}); // end watcher model

					let tags = req.body.tags != undefined && req.body.tags != null && req.body.tags != '' ? req.body.tags.split(',') : [];
					newWatcher.tags = tags;

					newWatcher.save((err, newUser) => {
						if (err) {
							console.log(err);
							logger.error(err.message, 'issueController: createWatcher', 10);
							let apiResponse = response.generate(true, 'Failed to create new Watcher', 500, null);
							reject(apiResponse);
						} else {
							let newWatcherObj = newWatcher.toObject();
							resolve(newWatcherObj);
						}
					}); // end comment save
				} else {
					logger.error('Watcher Cannot Be Added.Watcher Already added', 'issueController: createWatcher', 4);
					let apiResponse = response.generate(true, 'Watcher Already Present With this Name', 403, null);
					reject(apiResponse);
				}
			});
		}); // end new comment promise
	}; // end create comment function

	// making promise call.
	watcherCreationFunction()
		.then(result => {
			let apiResponse = response.generate(false, 'Watcher Added successfully', 200, result);
			res.send(apiResponse);
		})
		.catch(error => {
			console.log(error);
			res.send(error);
		});
};


let getAllWatcher = (req, res) => {
  
       WatcherModel.aggregate([
			{
				$match: {
					issueId: req.params.issueId
				}
			},
			{
				$lookup: {
					from: 'users',
					localField: 'reporter',
					foreignField: 'userId',
					as: 'reporter_details'
				}
			}
		]).exec((err, result) => {
			if (err) {
				console.log(err);
				logger.error(err.message, 'Watcher Controller: getAllWatcher', 10);
				let apiResponse = response.generate(true, 'Failed To Find Watcher Details', 500, null);
				res.send(apiResponse);
			} else if (check.isEmpty(result)) {
				logger.info('No Watcher Found', 'Watcher Controller: getAllWatcher');
				let apiResponse = response.generate(true, 'No Watcher Found', 404, null);
				res.send(apiResponse);
			} else {
				let apiResponse = response.generate(false, 'All Watcher Details Found', 200, result);
				res.send(apiResponse);
			}
		});
}// end get all Watcher


let deleteWatcher = (req, res) => {
	console.log(req.params.watcherId);
	console.log(req.params.issueId);
	WatcherModel.findOneAndRemove({ watcherId: req.params.watcherId, issueId: req.params.issueId }).exec((err, result) => {
		if (err) {
			console.log(err);
			logger.error(err.message, 'Issue Controller: deleteWatcher', 10);
			let apiResponse = response.generate(true, 'Failed To delete Watcher', 500, null);
			res.send(apiResponse);
		} else if (check.isEmpty(result)) {
			logger.info('No Watcher Found', 'Issue Controller: deleteWatcher');
			let apiResponse = response.generate(true, 'No Watcher Found', 404, null);
			res.send(apiResponse);
		} else {
			let apiResponse = response.generate(false, 'Deleted the Watcher successfully', 200, result);
			res.send(apiResponse);
		}
	});
}; // end delete Watcher





let getAllNotification = (req, res) => {
  
       NotificationModel.aggregate([
			{
				$match: {
					status: 1
				}
			},
			{
				$lookup: {
					from: 'comments',
					localField: 'commentId',
					foreignField: 'commentId',
					as: 'comment_details'
				}
			}
		]).exec((err, result) => {
			if (err) {
				console.log(err);
				logger.error(err.message, 'Issue Controller: getAllNotification', 10);
				let apiResponse = response.generate(true, 'Failed To Find Watcher Details', 500, null);
				res.send(apiResponse);
			} else if (check.isEmpty(result)) {
				logger.info('No Notification Found', 'Issue Controller: getAllNotification');
				let apiResponse = response.generate(true, 'No Notification Found', 404, null);
				res.send(apiResponse);
			} else {
				let apiResponse = response.generate(false, 'All Notification Details Found', 200, result);
				res.send(apiResponse);
			}
		});
}// end get all Notification


module.exports = {
	createIssue: createIssue,
	getAllIssue: getAllIssue,
	getSingleIssue: getSingleIssue,
	deleteIssue: deleteIssue,
	editIssue: editIssue,
	createComment: createComment,
	getUserDetails: getUserDetails,
	createWatcher: createWatcher,
	getAllWatcher: getAllWatcher,
	deleteWatcher: deleteWatcher,
	getAllNotification: getAllNotification,
	getAllComments: getAllComments
}; // end exports