const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'who did 911?') {
    msg.reply('Ben');
  }
});

client.login(process.env.BOT_TOKEN);
