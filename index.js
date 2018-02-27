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
    msg.reply('thats what i call hamburgers!');
  }
});

client.on('message', msg => {
  if (msg.content === 'who did 911') {
    msg.reply('https://media.discordapp.net/attachments/331721140978319361/331721426082201610/image.png?width=748&height=422');
  }
});

client.on('message', msg => {
  if (msg.content === '353-627-262') {
    msg.reply('https://github.com/NamesJoeyWheeler/Alfred/');
  }
});

client.login(process.env.BOT_TOKEN);
