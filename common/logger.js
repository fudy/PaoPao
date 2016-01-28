  var winston = require('winston');

/*
  var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ level: 'debug'}),
      new (winston.transports.File)({ filename: 'dev.log' })
    ]
  });

  module.exports = logger
  */

var getLabel = function(callingModule) {
    var parts = callingModule.filename.split('/');
    console.log(callingModule.filename);
    return parts[parts.length - 2] + '/' + parts.pop();
};

module.exports = function(callingModule) {
  return new winston.Logger({
    transports: [new winston.transports.Console({
      label: getLabel(callingModule)
    })]
  });
};