'use strict';
var Discord = require('discord.js');
var client = new Discord.Client();

var resp = require('./json/responses.json');
var commands = require('./functions/commands.js');
var token = require('./json/config.json').discord.token;
require('./functions/eventLoader.js')(client);


client.bot.on('message', (message) => {
	if (message.author.bot) return;
	if (message.content.startsWith(client.prefix)) {
		var args = message.content.slice(client.prefix.length).split(' ');
	}
});

var reload = (message, cmd) => {
	delete require.cache[require.resolve('./commands/' + cmd)];
	try {
		var cmdFile = require('./commands/' + cmd);
	} catch (err) {
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
