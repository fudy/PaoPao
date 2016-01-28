require('assert')
var email = require('../../common/email')
var logger = require('../../common/logger')(module);

describe('testSendEmail', function() {
	it('should send email', function(done) {
		logger.info ("start sending email")
		email.sendMail({
			templateDirName : 'forget-password-email', 
			to : '461944069@qq.com', 
			subject: '跑跑测评密码取回'
		}, {code : '123456'}, function(err, status) {
			logger.error ("error is: ", err)
			done();
		});

	});
});