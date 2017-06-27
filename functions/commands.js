'use strict';
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

const sheetFunction = require('./sheetFunction.js');
const config = require('../json/config.json');
const prefix = require('../json/config.json').discord.prefix;
const token = require('../json/config.json').discord.token;
const resp = require('../json/responses.json').cmds;
const sheetData = require('../json/sheetData.json')

function commandsJS(message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.send(resp.ping);

	} else if (message.content.startsWith(prefix + 'fs')) {
		let args = message.content.split(' ').slice(1);
		// E = Enhance, R = repair
		let itemName = args[0];
		let enhanceWanted = args[1];

		debugger;
		var sheetDataFilled = sheetData.values[0];
		var a = sheetDataFilled.indexOf(itemName, 405);
		if (a === -1) {
			message.reply('Command not formatted correctly.')
				.then(msg => console.log())
				.catch(console.error);
		} else {
			var r = resp.fs[0];
			var r2 = resp.fs[1];
			var r3 = resp.fs[2];
			var r4 = resp.fs[3];
			var r5 = resp.fs[4];
			var d = sheetDataFilled[a];

			message.reply(r + r2 + r3 + r4 + r5 + d)
				.then(msg => console.log(`${message}`))
				.catch(console.error);
		}
	}
}

module.exports = {
	commandsJS: commandsJS,
}
