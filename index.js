const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "416436767466586162") message.reply("Imposter!");
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === 'heil hitler') {
    msg.reply('nein!');
  }
});

client.on('message', msg => {
  if (msg.content === 'steamed hams') {
    msg.reply('Thats what I call hamburgers!');
  }
});

client.login(process.env.BOT_TOKEN);
