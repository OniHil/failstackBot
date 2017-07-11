'use strict';
const fs = require('fs');
const moment = require('moment');
const chalk = require('chalk');
const Discord = require('discord.js');
var client = new Discord.Client();
var resp = require('./json/responses.json');
var token = require('./json/config.json')
	.discord.token;
require('./util/eventLoader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
	if (err) console.error(err);
	console.log(`Loading a total of ${files.length} commands.`);
	for (var f of files) {
		var props = require(`./commands/${f}`);
		console.log(`Loading Command.`);
		client.commands.set(props.help.name, props);
		for (var alias of props.conf.aliases) {
			client.aliases.set(alias, props.help.name);
		}
	}
});

client.reload = command => {
	return new Promise((resolve, reject) => {
		try {
			delete require.cache[require.resolve(`./commands/${command}`)];
			let cmd = require(`./commands/${command}`);
			client.commands.delete(command);
			client.aliases.forEach((cmd, alias) => {
				if (cmd === command) client.aliases.delete(alias);
			});
			client.commands.set(command, cmd);
			cmd.conf.aliases.forEach(alias => {
				client.aliases.set(alias, cmd.help.name);
			});
			resolve();
		}
		catch (e) {
			reject(e);
		}
	});
};

client.login(token);
