module.exports = client => {
	client.on('disconnect', () => {
		console.log(`Disconnected from ${client.guilds.size} servers.`);
	});
}
