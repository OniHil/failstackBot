const config = require('../json/config.json');

module.exports = message => {
	if (message.author.bot) return;
	if (msg.content.startsWith(config.discord.prefix));
	const client = message.client;
	const args = message.content.split(' ');
	const command = args.shift().slice(config.discord.prefix.length);

	try {
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(client, message, args);
	}.catch(err) {
		console.log(`Command ${command} failed\n${err.stack}`);
	}
}
