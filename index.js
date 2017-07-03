'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();

const resp = require('./json/responses.json');
const commands = require('./functions/commands.js');
const token = require('./json/config.json').discord.token;
require('./functions/eventLoader.js')(client);


Client.bot.on('message', (msg) => {
	if (message.author.bot) return;
	if (msg.content.startsWith(Client.prefix)) {
		args = msg.content.slice(Client.prefix.length).split(' ');
	}
});

var reload = (message, cmd) => {
	delete require.cache[require.resolve('./commands/' + cmd)];
	try {
		let cmdFile = require('./commands/' + cmd);
	}.catch(err) {
		message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then(
			response = response.delete(1000).catch(error => console.log(error.stack))
		).catch(error => console.log(error.stack));
	}
	message.channel.sendMessage(`${cmd} reload was a success.`).then(
		response = response.delete(1000).catch(error => console.log(error.stack))
	).catch(error => console.log(error.stack));
};

exports.reload = reload;

client.login(token);
