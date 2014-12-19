var express = require('express'),
	session = require('express-session'),
	router = express.Router(),
	passport = require('passport'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Purchase = mongoose.model('Purchase');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ping pong' });
});

router.post('/login', function(req, res) {
	User.find(new User({username:req.body.username}), req.body.password, function(err, user) {
		if(!user) {
			res.status(400).end();
		} else {
			req.session.username = req.body.username;
			console.log(req.session.username);
			res.status(200).end();
		}
	});
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

// router.post('/add-item', function(req, res) {
// 	var user = req.session.username,
// 		trimmedUser = user.trim();
// 	User.findOne({username: trimmedUser}, function(err, user, count) {
// 		console.log("jlasdjf -----> " + req.body.name);
// 		var purchase = new Purchase({name: req.body.name,
// 						 price: req.body.price,
// 						 photo: req.body.image,
// 						 category: req.body.category,
// 						 notes: req.body.notes});
// 		user.purchases.push(purchase);
// 		user.save(function(err, user, count) {
// 			res.status(200).end();
// 		});
// 	});
// });

module.exports = router;
