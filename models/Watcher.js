const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

let WatcherSchema = new Schema({
	watcherId: {
	  type: String,
		default: '',
		index: true,
		unique: true
	},
	issueId: {
		type: String,
		default: ''
	},
	userId: {
		type: String,
		default: ''
	},
		reporter: {
		type: String,
		default: ''
	},
});

module.exports = mongoose.model('Watcher', WatcherSchema);
