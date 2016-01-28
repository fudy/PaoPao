require('assert')
var logger = require('../../common/logger')(module);

describe('testGetConfig', function() {
	it('should get config json', function(done) {
		var config = require("../../config/application-config");
		logger.info(config.mail,{});
		done();
	})
});

