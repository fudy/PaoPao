
var logger = require('../common/logger')(module);
var User = require('../models/index').User;
var CryptoJS = require("crypto-js");

exports.findByEmail = function(email, callback) {
	User.findByEmail(email, callback);
}

exports.validate = function(user, callback) {
	var userEntity = new User(user);
	User.findByUsername(user.username, function(err, retUser) {
		var err = "用户名或密码不正确！";
		if (retUser) {
			if (CryptoJS.SHA1(user.password) == retUser.password) {
				callback(null);
			} else {
				callback(err);
			}			
		} else {
			callback(err);
		}
	});
}

/*
	callback : function(err), return null if no err, either retrun string
*/
exports.resetPasswordByEmail = function(email, newPassword, callback) {
	if (null == email || "" == email) {
		callback("邮箱不能为空！");
	} else {
		User.findByEmail(email, function(err, user) {
			if (user) {
				user.password = newPassword;
				user.save(callback);
			} else {
				callback("更新密码失败");
			}
		});		
	}

}
/* 
	callback: function(null | ["str1", "str2"])
*/
exports.signup = function(user, callback) {
	var userEntity = new User(user);
	User.findByUsername(user.username, function(err, retUser) {
		if (retUser) {
			callback(["该用户名已经被注册!"]);
		} else {
			User.findByEmail(user.email, function(err, retEmail) {
				if (retEmail) {
					callback(["该邮箱已被注册!"]);
				}
				else {
					userEntity.save(function(err) {
					    if (err) {
					        logger.log(err);
					        callback("数据库繁忙，请稍后再试!")
					    } else {
					    	logger.log(user.username, ' save succeeded!')
					    	callback(null);
					    }
					});
				}
			});
		}
	});
}