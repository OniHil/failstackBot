'use strict';
var Discord = require('discord.js');
var client = new Discord.Client();

var config = require('../../json/config.json');
var sheetData = require('../../json/sheetData.json');

var fs = {
	help: config.help.failstack,
	func: (client, message, args) => {
		// E = Enhance, R = Repair/replace, D = re-enhance (degrade part),
		var itemName = args[0];
		var enhanceWanted = args[1];

		var a = sheetData.values[[0]];
		var sheetItemName = a.indexOf(itemName);
		if (sheetItemName === -1) {

			message.reply('Command not formatted correctly.')
				.then(msg => console.log())
				.catch(console.error);
		} else {

			var sheetFailstack = a.indexOf(enhanceWanted);
			message.reply()
				.then(msg => console.log(`${msg}`))
				.catch(console.error);
		}
	}
};
