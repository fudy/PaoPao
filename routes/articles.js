var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads' });
var router = express.Router();
var ArticleController = require('../controllers/article-controller');

router.get('/article', ArticleController.getArticle);
router.post('/article', ArticleController.postArticle)
//Field name(upload) specified in the form
router.post('/upload', upload.single('upload'), ArticleController.postUpload);

module.exports = router;