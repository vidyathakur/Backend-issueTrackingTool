const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let issueSchema = new Schema({
	issueId: {
		type: String,
		default: '',
		index: true,
		unique: true
	},
	userId: {
		type: String,
		default: ''
	},
  title: {
		type: String,
		default: ''
	},
	status: {
		type: Number,
		default: ''
	},
	description: {
		type: String,
		default: ''
	},
	reporter: {
		type: String,
		default: ''
	},
  assignee: {
		type: String,
		default: ''
	},
	images: [],
	createdOn: {
		type: Date,
		default: ''
	}
});

module.exports = mongoose.model('Issue', issueSchema);
