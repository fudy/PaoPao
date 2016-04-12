var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/index-controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', IndexController.getLogin);
router.post('/login', IndexController.postLogin);

/* login */
router.get('/login', IndexController.getLogin);
router.post('/login', IndexController.postLogin);

/* signup */
router.get('/signup', IndexController.getSignup);
router.post('/signup', IndexController.postSignup);

router.get('/captcha', IndexController.getCaptcha);

/* forget, then reset password */
router.get('/forget', IndexController.getForget);
router.post('/forget', IndexController.postForget);

router.post('/validate_email', IndexController.postValidateEmail);

router.post('/reset_password', IndexController.postResetPassword);

module.exports = router;
