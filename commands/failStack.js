'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();

const sheetFunction = require('../sheetFunction.js');
const config = require('../../json/config.json');
const sheetData = require('../../json/sheetData.json')

let args = message.content.split(' ').slice(1);
// E = Enhance, R = repair
let itemName = args[0];
let enhanceWanted = args[1];

debugger;
var sheetDataFilled = sheetData.values[[0]];
var sheetItemName = sheetDataFilled.indexOf(itemName);
if (sheetItemName === -1) {
	message.reply('Command not formatted correctly.')
		.then(msg => console.log())
		.catch(console.error);
} else {
	var
	var r = resp.fs[0];
	var r2 = resp.fs[1];
	var r3 = resp.fs[2];
	var r4 = resp.fs[3];
	var r5 = resp.fs[4];
	var sheetFailstack = sheetDataFilled.indexOf[enhanceWanted];


	message.reply(r + sheetFailstack + ' ' + sheetItemName + r2 + r3 + r4 + r5 + d)
		.then(msg => console.log(`${msg}`))
		.catch(console.error);
}

let fsCmd = {
	help: config.help.fs
}