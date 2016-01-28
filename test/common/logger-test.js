require('assert')
var logger = require('../../common/logger')(module);

describe('testLog', function() {
	it('should log', function(done) {
		logger.info("hello world!");
		done()
	})
});