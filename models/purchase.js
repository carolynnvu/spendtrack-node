var mongoose = require('mongoose'),
	passportLocalMongoose = require('passport-local-mongoose');

var Purchase = ({
	name : String,
	price : Number,
	photo : String,
	category : String,
	notes : String
});

mongoose.model('Purchase', Purchase);

module.exports = Purchase;

