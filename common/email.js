var path = require('path');
var logger = require('../common/logger')(module);
var EmailTemplate = require('email-templates').EmailTemplate;
var nodemailer = require('nodemailer');
var smtpConfig = require('../config/application-config').mail.smtpConfig;

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(smtpConfig);

/**
options = {
	templateDirName :  directory name under templates, required
	to : to email address, required
	subject: subject of email, required
}
renderData : variables that will be past to html.ejs, text.ejs
callback : function(err, status)
*/
exports.sendMail = function(options, renderData, callback) {
	var templateDir = path.join(__dirname, '../templates',options.templateDirName);
	var template= new EmailTemplate(templateDir);
	// Send a single email
	template.render(renderData, function (err, results) {
	  if (err) {
	    return logger.error(err)
	  }
	  var opts = {
	    from: smtpConfig.auth.user,
	    to: options.to,
	    subject: options.subject,
	    html: results.html,
	    text: results.text
	  };
	  transporter.sendMail(opts, callback);
	});

}


