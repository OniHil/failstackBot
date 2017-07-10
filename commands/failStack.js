'use strict';
var Discord = require('discord.js');
var client = new Discord.Client();

var config = require('../json/config.json');
var sheetData = require('../json/sheetData.json');
var resp = require('../json/responses.json');

var fs = {
	help: resp.cmds.help.failstack,
	func: (client, message, args) => {
		// E = Enhance, R = Repair/replace, D = re-enhance (degrade part),
		var itemName = args[0];
		var enhanceWanted = args[1];

		var a = sheetData.values[[0]];
		var sheetItemName = a.indexOf(itemName); // Base name index location.
		if (sheetItemName === null) {
			message.reply('Command not formatted correctly.')
				.then(msg => console.log())
				.catch(console.error);
		}
		else {
			var sheetFailstackIndex = a.slice(sheetItemName)
				.indexOf(enhanceWanted);
			console.log(sheetFailstackIndex);
			message.reply()
				.then(msg => console.log(`${msg}`))
				.catch(console.error);
		}
	}
};
