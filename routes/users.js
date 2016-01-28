var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user-controller');

/* login */
router.get('/login', UserController.getLogin);
router.post('/login', UserController.postLogin);

/* signup */
router.get('/signup', UserController.getSignup);
router.post('/signup', UserController.postSignup);

router.get('/captcha', UserController.getCaptcha);

/* forget, then reset password */
router.get('/forget', UserController.getForget);
router.post('/forget', UserController.postForget);
router.post('/validate_email', UserController.postValidateEmail);
router.post('/reset_password', UserController.postResetPassword);

module.exports = router;
