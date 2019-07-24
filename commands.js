const config = require("./config/config")

module.exports = {
	help: (message) => {
		message.channel.send(config.HELP_MESSAGE);
	},

	phil_copypasta: (message="", help=false) => {
		message_arguments = message.content.split(" ");
		emoji = message_arguments[1] ? message_arguments[1]: "O";

		if (help) 
			return `${config.COMMMAND_PREFIX}${arguments.callee.name} [emoji]`

		copy_pasta = `
Hello internet! My name is Philip though my friends call me Phill ,
Just a brief description of me:

${emoji} I like Creepers
${emoji} I like Firaxis
${emoji} I like Strategy Games
${emoji} I like Dota 2 + CSGO-(when I dont have 7 day ban)
${emoji} I hate TF2 Trading 
BTW <BUYING> HATS 1.11 <SELLING> WEAPONS 1 scrap
`
		message.channel.send(copy_pasta)
	}
}