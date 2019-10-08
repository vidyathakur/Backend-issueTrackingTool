const time = require('./../libs/timeLib');

const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

let notificationSchema = new Schema({
	notificId: {
	  type: String,
		default: '',
		index: true,
		unique: true
	},
	issueId: {
		type: String,
		default: ''
	},
	commentId: {
		type: String,
		default: ''
	},

		userId:{
		type: String,
		default: ''
	},
	 
	 status:{
		type: Number,
		default: '1'
	 },
	
	createdOn: {
		type: Date,
		default: time.now()
	}
});

module.exports = mongoose.model('Notification', notificationSchema);
