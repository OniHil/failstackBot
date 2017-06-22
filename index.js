'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();

const resp = require('./json/responses.json');
const commands = require('./functions/commands.js');
const config = require('./json/config.json');
const token = require('./json/config.json').discord.token;

client.on('ready', () => {
	console.log(resp.startup);
});
client.on('message', message => {
	commands.commandsJS(message);
});

client.login(token);
