const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const issueController = require('../controllers/issueController');
const appConfig = require('../config/appConfig');
const auth = require('../middlewares/auth');
const mongoose = require('mongoose');
let conn = mongoose.createConnection(appConfig.db.uri);

module.exports.setRouter = function(app) {
												let baseUrl = `${appConfig.apiVersion}/users`;
												app.get(`${baseUrl}/all/`, auth.isAuthorized, userController.getAllUser);
												app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);
												app.post(`${baseUrl}/signup`, userController.signUpFunction);
												/**
	 * @api {post} /api/v1/users/signup signup the users
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} firstName,lastName,email,mobile,password.(Send first name of the user. (body params) (required) , body parameter or as a header,last name of the user. (body params) (required)
   * 
   * email of the user. (body params) (required),mobile number of the user. (body params) (required),password of the user. (body params) (required))
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "User created",
	    "status": 200,
	    "data": [
					{
			 "__v": 0,
        "_id": "5a9e93871f3a547032b94d71",
        "createdOn": "2018-03-06T13:11:35.000Z",
        "mobileNumber": 2233112233,
        "email": "someone@mail.com",
        "lastName": "one",
        "firstName": "some",
        "userId": "ic4Wn5pPT"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "User Already Present With this Email ",
	    "status": 403,
	    "data": null
	   }
	 */
												app.post(`${baseUrl}/login`, userController.loginFunction);
												/**
	 * @api {post} /api/v1/users/login login the users
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * User can also Login with social login 'Google login' 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Login Successful",
	    "status": 200,
	    "data": [
					{
				"mobile": 2234435524,
        "email": "someone@mail.com",
        "firstName": "Vidya",
        "lastName": "Thakur",
        "userId": "h6yQJjQ"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Login Failed ",
	    "status": 400,
	    "data": null
	   }
	 */
												// params: email, password.

												app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logout);

												/**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/logout to logout user.
     *
     * @apiParam {string} userId userId of the user. (auth headers) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Logged Out Successfully",
            "status": 200,
            "data": null

        }
    */

												// auth token params: userId.

												app.post(`${baseUrl}/create`, issueController.createIssue);

												/**
	 * @api {post} /api/v1/users/create Create Issue
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} title title of the issue passed as a body parameter
   * @apiParam {String} userId userId of the issue passed as a body parameter
   * @apiParam {String} status status of the issue passed as a body parameter
	 * @apiParam {String} description description of the issue passed as a body parameter
	 * @apiParam {String} reporter reporter of the issue passed as a body parameter
	 * @apiParam {String} assignee assignee of the issue passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Issue Created successfully",
	    "status": 200,
	    "data": [
					{
						title: "string",
						status: "string",
						description: "string",
						reporter: "string",
						assignee: string,
						isPublished: boolean,
						userId: "string",
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

												app.get(`${baseUrl}/view/all/:userId`, issueController.getAllIssue);

												/**
	 * @api {get} /api/v1/users/view/all Get all issues
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Issue Details Found",
	    "status": 200,
	    "data": [
					{
						title: "string",
						status: "string",
						description: "string",
						reporter: "string",
						assignee: string,
						userId: "string",
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Issue Details",
	    "status": 500,
	    "data": null
	   }
	 */
												app.get(`${baseUrl}/view/:issueId`, issueController.getSingleIssue);

												/**
	 * @api {get} /api/v1/users/view/:issueId Get a single issue
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} issueId The issueId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Issue Found Successfully.",
	    "status": 200,
	    "data": {
	    			_id: "string",
	    			__v: number
					  issueId: "string",
					  title: "string",
						status: "string",
						description: "string",
						reporter: "string",
						assignee: string,
						userId: "string",
						created: "date",
						lastModified: "date"
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */
												app.post(`${baseUrl}/:issueId/delete`, issueController.deleteIssue);

												/**
	 * @api {post} /api/v1/users/:issueId/delete Delete issue by issueId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} issueId issueId of the issue passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Issue Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
												app.put(`${baseUrl}/:issueId/edit`, issueController.editIssue);

												/**
	 * @api {put} /api/v1/users/:issueId/edit Edit issue by issueId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} issueId issueId of the issue passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Issue Edited Successfully.",
	    "status": 200,
	    "data": [
					{
						issueId: "string",
						title: "string",
						status: "string",
						description: "string",
						reporter: "string",
						assignee: string,
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

												app.post(`${baseUrl}/create/comment`, issueController.createComment);

												/**
	 * @api {post} /api/v1/users/create/comment Create comment
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} issueId issueId of the comment passed as a body parameter
	 * @apiParam {string} userId userId of the comment passed as a body parameter
   * @apiParam {String} commentId commentId of the comment passed as a body parameter
	 * @apiParam {String} description description of the comment passed as a body parameter
	 * @apiParam {String} commentName commentName of the comment passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "comment Created successfully",
	    "status": 200,
	    "data": [
					{
						issueId: "string",
						userId: "string",
						commentId: "string",
						description: "hello world",
						commentName: string,
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

												app.get(`${baseUrl}/all/allComments/:issueId`, issueController.getUserDetails);

												/**
   * @apiGroup allComments
   * @apiVersion  1.0.0
   * @api {get} /api/v1/users/all/allComments/:issueId to get paginated comments of user.
   
   * @apiParam {string} issueId userId receiving user. (query params) (required)
   * @apiParam {number} skip skip value for pagination. (query params) (optional)
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
       {
        "error": false,
        "message": "All Comments Listed",
        "status": 200,
        "data": [
          {
            "commentId": "dx-I2Zu-",
            "issueId": "JJX29BwJ",
            "description": "hi i am gulshan please resolved my issues<br>",
            "commentName": "Gulshan Kumar",
            "userId": "UK2PaZ-7",
            "createdOn": "2019-10-03T15:22:15.000Z"
          },
          {
            "commentId": "o5Rvi8gF",
            "issueId": "JJX29BwJ",
            "description": "hello vidya did you solve this issues<br>",
            "commentName": "Gulshan Kumar",
            "userId": "UK2PaZ-7",
            "createdOn": "2019-10-05T08:28:37.000Z"
          },
          .........................
        ]

      }
 */

												// params: issueId.

												app.get(`${baseUrl}/view/all/comments/:issueId/:notifyid`, issueController.getAllComments);

												/**
   * @apiGroup all notifications
   * @apiVersion  1.0.0
   * @api {get} /api/v1/users/view/all/comments/issueId/notifyId to get updated comments of user.
   
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
       {
        "error": false,
        "message": "Notification details updated",
        "status": 200,
        "data": [
         {
            "commentId": "dx-I2Zu-",
            "issueId": "JJX29BwJ",
            "description": "hi i am gulshan please resolved my issues<br>",
            "commentName": "Gulshan Kumar",
            "images": [],
            "userId": "UK2PaZ-7",
            "createdOn": "2019-10-03T15:22:15.000Z"
        },
        {
            "commentId": "eCWWfuOK",
            "issueId": "JJX29BwJ",
            "description": "check this issues<br>",
            "commentName": "Gulshan Kumar",
            "images": [],
            "userId": "UK2PaZ-7",
            "createdOn": "2019-10-03T15:25:02.000Z"
        },
          .........................
        ]

      }
 */
												// params: issueId,notifyId.

												app.post(`${baseUrl}/view/delete/watcher/:watcherId/:issueId`, issueController.deleteWatcher);

												/**
   * @apiGroup delete watchers
   * @apiVersion  1.0.0
   * @api {get} /api/v1/users/view/all/view/delete/watcher/:watcherId/:issueId to delete  watcher of user.
   
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
       {
	    "error": false,
	    "message": "Deleted the Watcher successfully",
	    "status": 200,
	    "data": []
	    	}
 */
												// params: issueId,watcherId.

												app.post(`${baseUrl}/create/watcher`, issueController.createWatcher);

												/**
	 * @api {post} /api/v1/users/create/watcher Create watcher
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} issueId issueId of the watcher passed as a body parameter
	 * @apiParam {string} userId userId of the watcher passed as a body parameter
   * @apiParam {String} watcherId watcherId of the watcher passed as a body parameter
	 * @apiParam {String} description description of the watcher passed as a body parameter
	 * @apiParam {String} commentName commentName of the watcher passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "watcher Created successfully",
	    "status": 200,
	    "data": [
					{
						watcherId: "string"
						issueId: "string",
						userId: "string",
						commentId: "string",
						reporter: "login username",
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

												app.get(`${baseUrl}/view/all/watcher/:issueId`, issueController.getAllWatcher);

												/**
   * @apiGroup all notifications
   * @apiVersion  1.0.0
   * @api {get} /api/v1/users/view/all/view/all/watcher/issueId to get  watcher of user.
   
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
       {
        "error": false,
        "message": "All Watcher Details Found",
        "status": 200,
        "data": [
         
            "_id": "5d949902ebe7c62ad071382d",
            "watcherId": "H806bwiX",
            "issueId": "JJX29BwJ",
            "userId": "h6yQJjQ",
            "reporter": "h6yQJjQ",
            "__v": 0,
            "reporter_details": [
                {
                    "_id": "5d7f6a8cd652282c106b56cd",
                    "userId": "h6yQJjQ",
                    "firstName": "vidya",
                    "lastName": "thakur",
                    "password": "$2b$10$SxfG7P8hY17B/pa8KIiVKuYjf6DnBMQKqXnqyENl0mqFUawc69R9u",
                    "email": "vidyathakur27septe@gmail.com",
                    "mobile": "",
                    "createdOn": "2019-09-16T10:57:16.000Z",
                    "__v": 0
          .........................
        ]

      }
 */
												// params: issueId,watcherId,userId.

												app.get(`${baseUrl}/all/notifications`, issueController.getAllNotification);

												/**
   * @apiGroup all notifications
   * @apiVersion  1.0.0
   * @api {get} /api/v1/users/all/notifications to get paginated comments of user.
   
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
       {
        "error": false,
        "message": "All Notification Details Found",
        "status": 200,
        "data": [
         "_id": "5d9895f9f1b841320c2d1389",
            "notificId": "mQNuD3VPA",
            "issueId": "JJX29BwJ",
            "commentId": "eXxObZ_i",
            "userId": "h6yQJjQ",
            "status": 1,
            "createdOn": "2019-10-05T13:09:13.000Z",
            "__v": 0,
            "comment_details": [
                {
                    "_id": "5d9895f9f1b841320c2d1388",
                    "commentId": "eXxObZ_i",
                    "issueId": "JJX29BwJ",
                    "description": "please resolved this issue",
                    "commentName": "vidya thakur",
                    "userId": "h6yQJjQ",
                    "createdOn": "2019-10-05T13:09:13.000Z",
                    "__v": 0
          .........................
        ]

      }
 */

												app.post(`${baseUrl}/sociallogin`, userController.googleAuthSignIn);

												/**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/sociallogin api for user Google login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Google Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc",
                "userDetails": {
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8"
            }

        }
    */
											}
