require('assert')
var userService = require('../../services/user-service')
var _ = require('underscore');
var logger = require('../../common/logger')(module);

describe('testLog', function() {
	it('should log', function(done) {
		logger.info(_.extend({a:3}, {a:5, b:6}));
		done()
	})
});

describe('testSignup', function() {
	it('should signup', function(done) {
		var user = {
			username: 'fudy126',
			email: 'fudy1236@test.com',
			password: 'hello12345'
		}
		userService.signup(user, function(err) {
			logger.log(err);
			done();
		})

	})
});

describe('testValidate', function() {
	it('should be valid', function(done) {
		var user = {
			username: 'fudy126',
			password: 'hello12345'
		}
		userService.validate(user, function(err) {
			logger.log("error message is: " + err);
			done()
		});

	})
});

describe('testResetPasswordByEmail', function() {
	it('should reset password', function(done) {
		userService.resetPasswordByEmail('admind', 'hello1234', function(err) {
			if (err) {
				logger.error(err);
			} else {
				done();
			}
		});

	})
});

describe('testFindByEmail', function() {
	it('should find email ', function(done) {
		userService.findByEmail('admind', function(err, user) {
			logger.info("user is: ", user, {});
			done();
		});

	});
});
