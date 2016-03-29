var logger = require('../common/logger')(module);
var mongoose = require('mongoose');
var User = require('./user');

mongoose.connect('mongodb://localhost/dev', {
  server: {
    poolSize: 2
  }
}, function (err) {
  if (err) {
    logger.error("Can't connect mongodb, error message: ", err.message);
    process.exit(1);
  }
});

mongoose.connection.once('open', function() {
  logger.info("Mongodb connected!")
});

exports.User = User;