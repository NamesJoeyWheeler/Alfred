const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'who did 911?') {
    msg.reply('Ben');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hi') {
    
  let embed = new Discord.RichEmbed()
  .addfield("embed test", "yoyoyoyoyo");
  
  message.channel.send(embed);
    
  }
});

client.login(process.env.BOT_TOKEN);
