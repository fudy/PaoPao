var express = require('express');
var router = express.Router();
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(
  function(username, password, done) {
	  console.log(username)
	  console.log(password)
	  var user = { username: username, password: password}
	  console.log(user)
	  if (user.username != 'fudli') {
	    return done(null, false, { message: 'Incorrect username.' });
	  }
	  if (user.password != '123456') {
	    return done(null, false, { message: 'Incorrect password.' });
	  }
	  return done(null, user);
  }
));


router.get('/login', function(req, res, next){
  res.render('users/login', { title: 'Users' })

}).post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

router.get('/signup', function(req, res, next) {
	res.render('users/signup')
}).post('/signup', function(req, res, next) {

});

module.exports = router;
