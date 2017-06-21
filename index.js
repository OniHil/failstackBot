'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./json/config.json');
const token = require('./json/config.json').discord.token;
const resp = require('./json/responses.json');
const commands = require('./functions/commands.js');

client.on('ready', () => {
	console.log(resp.startup);
	commands.commandsJS();
});

client.login(token);
