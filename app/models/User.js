// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	email : {type:String, required: true, unique: true},
	is_admin : { type: Boolean, default: false}
});