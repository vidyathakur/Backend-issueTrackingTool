const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

let CommentSchema = new Schema({
	commentId: {
		type: String,
		default: '',
		index: true,
		unique: true
	},
	issueId: {
		type: String,
		default: ''
	},
	description: {
		type: String,
		default: ''
	},
	commentName:{
		type: String,
		default: ''
	},
		images: [],
	userId: {
		type: String,
		default: ''
	},
	createdOn: {
		type: Date,
		default: ''
	}
});

module.exports = mongoose.model('Comment', CommentSchema);
