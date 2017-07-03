const main = require('../index.js');

exports.run = function (client, message, args) {
	var cmd = args.join(' ');
	main.reload(message, cmd);
};
