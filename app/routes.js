var Post = require('./models/Post');
var User = require('./models/User');

module.exports = function(app) {
	// server routes ===========================================================
	
	//Post routes
	// get list of all posts
	app.get('/api/posts', function(req, res) {
		Post.find( function(err, posts){
			
			//if there in an error retrieving, send the error
			if(err)
				res.send(err);
				
			res.json(posts);
		});
		

	});
	
	// create post and send back all posts after creation
	app.post('/api/posts', function(req, res) {
		
		console.log( 'content: ' + req.body.content );
		
		
		User.findOne( {email:req.body.author}, function(err, user){
			if(err)
				res.send(err);
			var authorId = user._id;	
			
			//create a post
			Post.create({
				content: req.body.content,
				author: authorId
			}, function(err, post) {
				if(err)
					res.send(err);
					
					// get and return all posts after another is created
					Post.find( function(err, posts){
				
					//if there in an error retrieving, send the error
					if(err)
						res.send(err);
						
					res.json(posts);
				});
	
			});
		});
		

	});
	
	//delete a post
	app.delete('/api/posts/:post_id', function(req, res) {
		
		Post.remove({
			_id : req.params.post_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the posts after deleting
			Post.find(function(err, posts) {
				if (err)
					res.send(err)
				res.json(posts);
			});
		});
		

	});
	
	//User routes
	
	app.get('/api/users', function(req, res) {
		// get and return all users after another is created
		User.find( function(err, users){
		
			//if there in an error retrieving, send the error
			if(err)
				res.send(err);
				
			res.json(users);
		});
	});
	
	// create user and send back all users after creation
	app.post('/api/users', function(req, res) {
		
		console.log( 'email: ' + req.body.email );
		//create a user
		User.create({
		
			email: req.body.email
		}, function(err, post) {
			if(err)
				res.send(err);
				
			// get and return all users after another is created
			User.find( function(err, users){
			
				//if there in an error retrieving, send the error
				if(err)
					res.send(err);
					
				res.json(users);
			});
		});

	});
	
	//delete a user
	app.delete('/api/posts/:user_id', function(req, res) {
		
		User.remove({
			_id : req.params.user_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the users after deleting
			User.find(function(err, users) {
				if (err)
					res.send(err)
				res.json(users);
			});
		});
		

	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get( "*", function(req,res){
	        res.sendfile('./public/index.html');
    });

};