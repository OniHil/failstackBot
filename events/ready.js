module.exports = client => {
	client.user.setGame(`on ${client.guilds.size} servers`);
	console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
};
