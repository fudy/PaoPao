exports.getRandomString = function(size) {
	return require('crypto').randomBytes(64).toString('hex').slice(0,size);
}