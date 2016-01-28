require('assert')
var index = require('../../models/index')
var User = index.User

describe('testSave', function() {
	it('should save user into mongodb', function(done) {
		var user = new User({username:'fudy', email: 'fudy@test.com'})
		user.save(function(err) {
		    if (err) {
		        console.log(err);
		    } else {
		    	console.log('save succeeded!')
		    	done()
		    }
		   
		});

	})
});

describe('testByUsername', function() {
	it('should find user', function(done) {
		User.findByUsername('test', function(err, user) {
			if (err) {
				console.log(err)
			} else {
				console.log(user);
				done();
			}
		});

	})
});

describe('testByEmail', function() {
	it('should not find email', function(done) {
		User.findByEmail('test@test.com', function(err, user) {
			if (err) {
				console.log(err)
			} else {
				console.log(user);
				done();
			}
		});

	})
});




