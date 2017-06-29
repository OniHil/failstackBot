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
