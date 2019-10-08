
const mongoose = require('mongoose');
Schema = mongoose.Schema;

let userSchema = new Schema({
	userId: {
		type: String,
		default: '',
		index: true,
		unique: true
	},

	firstName: {
		type: String,
		default: ''
	},
	lastName: {
		type: String,
		default: ''
	},
	password: {
		type: String,
		default: 'passskdajakdjkadsj'
	},
	email: {
		type: String,
		default: ''
	},
	mobile: {
		type: String,
		default: ''
	},
	createdOn: {
		type: Date,
		default: ''
	}
});

mongoose.model('User', userSchema);
