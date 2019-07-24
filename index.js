const discord   = require("discord.js")
	, config    = require("./config/config")
	, commmands = require("./commands")
	, Client    = new discord.Client( );

Client.on("ready", () => {
	console.log("Logged in");
});

Client.on("message", (message) => {
	if (message.author.bot) 
		return;
	
	if (message.content.startsWith(config.COMMAND_PREFIX)) {
		
		//will split the command by spaces, and then get the command by doing the
		//substring from the command prefix string to the end of the command string
		command = message.content.split(" ")[0].substring(config.COMMAND_PREFIX.length,);

		command_function = commmands[command];

		if (!command_function)
			return message.channel.send("Command not found, try: !!help");

		command_function(message);
	}
});

Client.login(config.CLIENT_SECRET);