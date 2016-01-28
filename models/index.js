var mongoose = require('mongoose');
var User = require('./user');

mongoose.connect('mongodb://localhost/dev', {
  server: {
    poolSize: 2
  }
}, function (err) {
  if (err) {
    logger.error('connect mongoose error: ', err.message);
    process.exit(1);
  }
});

mongoose.connection.once('open', function() {
  console.log("we're connected!")
});

exports.User = User;