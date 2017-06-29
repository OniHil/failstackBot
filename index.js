'use strict';
const Discord = require('discord.js');
client = new Discord();
const resp = require('./json/responses.json');
const commands = require('./functions/commands.js');
const token = require('./json/config.json').discord.token;
const ping = require('./commands/ping.js');

client.on('ready', () => {
	client.user.setGame(`on ${client.guilds.size} servers`);
	console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});
Client.bot.on('message', (msg) => {
	if (message.author.bot) return;
	if (msg.content.startsWith(Client.prefix)) {
		args = msg.content.slice(Client.prefix.length).split(' ');
		if (args[0] in Client.commands) {
			Client.commands[args[0]].func(Client, msg, args);
		}
	}
});

client.login(token);
