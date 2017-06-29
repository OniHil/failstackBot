let ping = {
	help: "Send a Pong!",
	func: (client, message, args) => {
		message.channel.sendMessage('Pong!');
		console.log(client.prefix);
	}
}
