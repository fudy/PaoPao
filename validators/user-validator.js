var validator = require('express-validator');
var logger = require('../common/logger')(module);

/* return null if no error, otherwise, return error message array */
var getErrorMsgArrar = function(req) {
	var errors = req.validationErrors();
	var errs = null;
	if (errors && errors.length > 0) {
		errs = [];
		for(i=0; i < errors.length; i++) {
			errs.push(errors[i].msg);
		}
	}
	return errs;
}

exports.validateEmailCode = function(req) {
	req.checkBody('code', "邮箱验证码不正确").equals(req.session.code);
	var errs = getErrorMsgArrar(req);
	return errs;
}

exports.validateForget = function(req) {
	req.checkBody('email', '邮箱格式不正确').isEmail();
	req.checkBody('captcha', "验证码不正确").equals(req.session.captcha);
	var errs = getErrorMsgArrar(req);
	return errs;
}

exports.validateResetPassword = function(req) {
	req.checkBody('password', '密码长度为6-40个数字、英文字符、特殊符号').len(6, 40);
	req.checkBody('repassword', '两次密码输入不一致').equals(req.body.password);
	var errs = getErrorMsgArrar(req);
	return errs;
}

exports.validateSignup = function(req){
	logger.debug("req: ", req.body, {})
	req.checkBody('username', '用户名长度为6-40个字符').len(6, 40);
	req.checkBody('password', '密码长度为6-40个数字、英文字符、特殊符号').len(6, 40);
	req.checkBody('repassword', '两次密码输入不一致').equals(req.body.password);
	req.checkBody('email', '邮箱格式不正确').isEmail();
	req.checkBody('captcha', "验证码不正确").equals(req.session.captcha);
	var errs = getErrorMsgArrar(req);
	return errs;
}