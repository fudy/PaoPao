var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CryptoJS = require("crypto-js");

/* define user schema in mongodb */
var userSchema = new Schema({
  username: 	{ type: String },
  alias_name: 	{ type: String },
  email: 		{ type: String },
  password: 	{ type: String },
  level: 		{ type: Number, default: 0},
  active: 		{ type: Boolean },
  score: 		{ type: Number, default: 0},
  create_at:  	{ type: Date, default: Date.now },
  update_at:  	{ type: Date, default: Date.now }
});

/* before save data to dabase */        
userSchema.pre('save', function(next) {
  this.password = CryptoJS.SHA1(this.password);
  next();
});
/* set indexes*/
userSchema.index({username: 1}, {unique: true});
userSchema.index({email: 1}, {unique: true});

/* set static method */
userSchema.statics.findByEmail = function(email,callback){
    this.findOne({ email: email}, callback);
}

userSchema.statics.findByUsername = function(username, callback) {
	this.findOne({ username: username}, callback);
}

/*create and export the model*/
var User = mongoose.model('User', userSchema);
module.exports = User



