var config = require('../config/application-config');

exports.getUploadUrl = function(fileName) {
    return config.upload.url + "/" + fileName;
}