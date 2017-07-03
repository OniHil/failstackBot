module.exports = client => {
	client.on('ready', () => {
		console.log(`Reconnected to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
	});
}
