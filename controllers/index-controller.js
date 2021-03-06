var logger = require('../common/logger')(module);
var email = require('../common/email');
var passport = require('passport');
var _ = require('underscore');
var userService = require('../services/user-service')
var userValidator = require('../validators/user-validator')
var captchapng = require('captchapng');
var LocalStrategy = require('passport-local').Strategy;
var utils = require('../common/utils');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

/* will be called by passport.authenticate */
passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    function(username, password, done) {
        var user = { username: username, password: password}
        logger.info("user", user, {})

        logger.info(user,{})
        userService.validate(user, function(err, retUser) {
            if (err) {
                return done(null, false, { errorMsgs: JSON.stringify([err])});
            } else {
                return done(null, retUser);
            }
        });
    }
));


var passportMessageBugFix = function(params) {
    if (typeof params.message != "undefined" && "Missing credentials" == params.message) {
        params.errorMsgs = JSON.stringify(['用户名或密,码不能为空!']);
    }
}

exports.getLogin = function(req, res, next){
    res.render('index/login', { username: req.cookies.rememberMe });
}

/* passport custom callback */
exports.postLogin = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) {
            if (typeof info !== "undefined") {
                var params = _.extend(info,req.body);
                passportMessageBugFix(params);
                logger.info (params.errorMsgs);
                return res.render('index/login', params);
            } else {
                return res.render('index/login');
            }
        }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            if (req.body.rememberMe) {
                res.cookie('rememberMe', req.body.username);
            }
            logger.info('user login', user, {});
            if(user.level == 10) {
                return res.redirect('/articles/article');
            } else {
                return res.redirect('/users/home/' + user.username);
            }
        });
    })(req, res, next);
};

/*
 exports.login = passport.authenticate('local', { successRedirect: '/',
 failureRedirect: '/users/login',
 failureFlash: true });
 */


exports.getSignup = function(req, res, next) {
    res.render('index/signup')
}

exports.getCaptcha = function(req, res, next) {
    var code = parseInt(Math.random()*9000+1000);
    req.session.captcha = code;
    var p = new captchapng(80,30, code); // width,height,numeric captcha
    p.color(200, 200, 200, 255);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

    var img = p.getBase64();
    var imgbase64 = new Buffer(img,'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
}

exports.getForget = function(req, res, next) {
    res.render('index/forget');
}

exports.postForget = function(req, res, next) {
    logger.info ("reqest body is : ", req.body, {});
    var errs = userValidator.validateForget(req);
    if (errs) {
        var retParams = _.extend({errorMsgs: JSON.stringify(errs)}, req.body);
        res.render('index/forget', retParams);
    } else {
        userService.findByEmail(req.body.email, function(err, user) {
            if (user) {
                var code = utils.getRandomString(20);
                req.session.code = code;
                logger.info("code is: ", code);
                email.sendMail({
                    templateDirName : 'forget-password-email',
                    to : req.body.email,
                    subject: '跑跑测评密码取回'
                }, {
                    code : code
                },function(err, status) {
                    logger.error ("error is: ", err)
                });
                res.render('index/email_validation', {email : req.body.email});
            } else {
                var retParams = _.extend({errorMsgs: JSON.stringify(['该邮箱没有注册任何用户'])}, req.body);
                res.render('index/forget', retParams);
            }
        });

    }

}

exports.postValidateEmail = function(req, res, next) {
    logger.info ("reqest body is : ", req.body, {});
    var errs = userValidator.validateEmailCode(req);
    if (errs) {
        var retParams = _.extend({errorMsgs: JSON.stringify(errs)}, req.body);
        res.render('index/email_validation', retParams);
    } else {
        req.session.code = null;
        req.session.email = req.body.email;
        res.render('index/reset_password');
    }

}

exports.postResetPassword = function(req, res, next) {
    var errs = userValidator.validateResetPassword(req);
    if (errs) {
        var retParams = _.extend({errorMsgs: JSON.stringify(errs)}, req.body);
        res.render('index/reset_password', retParams);
    } else {
        userService.resetPasswordByEmail(req.session.email, req.body.password, function(err) {
            if(err) {
                var retParams = _.extend({errorMsgs: JSON.stringify([err])}, req.body);
                res.render('index/reset_password', retParams);
            } else {
                res.render('index/reset_password_success');
            }
        });
    }
}

exports.postSignup = function(req, res, next) {
    logger.debug("signup request body:", req.body)
    var user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }
    var errs = userValidator.validateSignup(req);
    if (errs) {
        var retParams = _.extend({errorMsgs: JSON.stringify(errs)}, user);
        console.log(retParams);
        res.render('index/signup', retParams);
    } else {
        userService.signup(user, function(errs) {
            if (errs) {
                logger.error('failed to signup', errs)
                res.render('index/signup', {errorMsgs: JSON.stringify(errs)})
            } else {
                logger.info('signup succeeded!')
                res.render('index/signup_success', {email : user.email})
            }
        });
    }
}