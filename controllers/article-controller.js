var logger = require('../common/logger')(module);
var service = require('../common/service');
var utils = require('../common/utils');

var fs = require('fs-extra');

exports.getArticle = function(req, res, next) {
    res.render('articles/new_article');
}

exports.postArticle = function(req, res, next) {
    var fileName = utils.getRandomString(64) + ".html";
    var file = "views/repository/" + fileName;
    logger.info("path: " + file);
    fs.outputFile(file, req.body.editor, function (err) {
        if (err) {
            logger.error(err);
        }
        res.render("repository/" + fileName);
    })
}

exports.postUpload = function(req, res, next) {
    logger.info(req.file, {});
    var url = service.getUploadUrl(req.file.filename);
    var callbackFnNumber = req.query.CKEditorFuncNum;
    var html ="<script type='text/javascript'>window.parent.CKEDITOR.tools.callFunction("
        + callbackFnNumber
        + ", '"
        + url
        + "');</script>"
    res.send(html);
}