var express = require('express'),
	router = express.Router(),
	passport = require('passport'),
	mongoose = require('mongoose'),
	User = mongoose.model('User');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ping pong' });
});

router.post('/login', function(req, res) {

});

router.get('/signup', function(req, res) {
	res.status(200);
	res.send("ping");
});

router.post('/signup', function(req, res) {
	User.register(new User({username:req.body.username}), req.body.password, function(err, user) {
		res.redirect(303, '/signup');	
	});
});

module.exports = router;
