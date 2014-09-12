var Post = require('./models/Post');
var User = require('./models/User');

module.exports = function(app) {
	// server routes ===========================================================
	
	//Post routes
	// get list of all posts
	app.get('/api/posts', function(req, res) {

		

	});
	
	// create post and send back all posts after creation
	app.post('/api/posts', function(req, res) {


	});
	
	//delete a post
	app.delete('/api/posts/:post_id', function(req, res) {

		

	});
	
	//User routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get( "*", function(req,res){
	        res.sendfile('./public/index.html');
    });

};