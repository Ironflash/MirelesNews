// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
	content: { type: String, required: true },
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
	date_created: { type: Date, default: Date.now(), required: true},
	image: String
});