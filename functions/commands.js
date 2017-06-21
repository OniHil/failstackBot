'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../json/config.json');
const prefix = require('../json/config.json').discord.prefix;
const resp = require('../json/responses.json');

function commandsJS() {
	client.on('message', message => {

		if (message.content.startsWith('ping')) {
			message.channel.send(resp.cmds.ping);
		}
	});
}

module.exports = {
	commandsJS: commandsJS,
}
