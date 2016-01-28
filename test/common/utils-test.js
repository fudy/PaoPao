require('assert')
var utils = require('../../common/utils')
var logger = require('../../common/logger')(module);

describe('testRandomString', function() {
	it('should get random string', function(done) {
		var s = utils.getRandomString(20);
		logger.info ("random string is: ", s);
		done();
	});
});