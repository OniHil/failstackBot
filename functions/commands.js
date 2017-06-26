'use strict';
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

const sheetFunction = require('./sheetFunction.js');
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

		debugger;
		message.reply(fs.readFileSync('./json/sheetData.json').toString());

		Array.prototype.myFind = function (obj) {
			return this.filter(function (item) {
				for (var prop in obj)
					if (!(prop in item) || obj[prop] !== item[prop])
						return false;
				return true;
			});
		};
	}
}

module.exports = {
	commandsJS: commandsJS,
}
