'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();

const sheetFunction = require('./sheetFunction');
const config = require('../json/config.json');
const prefix = require('../json/config.json').discord.prefix;
const token = require('../json/config.json').discord.token;
const resp = require('../json/responses.json').cmds;

function commandsJS(message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.send(resp.ping);

	} else if (message.content.startsWith(prefix + 'fs')) {
		let args = message.content.split(' ').slice(1);
		let itemName = args[0];
		var itemNameRow = 0;

		sheetFunction.listMajors(itemNameRow, function () {
			message.reply();
		});
	}
}

module.exports = {
	commandsJS: commandsJS,
}
