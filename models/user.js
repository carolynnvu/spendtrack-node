var mongoose = require('mongoose'),
	passportLocalMongoose = require('passport-local-mongoose'),
	Purchase = require('../models/purchase.js');


var User  = mongoose.Schema({ 
	/* passport-local-mongoose provides username and salted-password fields */
	purchases : [Purchase]
});

User.plugin(passportLocalMongoose);

mongoose.model('User', User);

module.exports = User;