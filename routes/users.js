var express = require('express');

var router = express.Router();
var UserController = require('../controllers/user-controller');

router.get('/home/:id', function(req, res, next){
    res.render('users/home')
})

module.exports = router;
