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
  if (msg.content === 'that sauce') {
    msg.reply('https://github.com/NamesJoeyWheeler/Alfred');
  }
});

client.on('message', msg => {
  if (msg.content === 'Blue Hat') {
    msg.reply('Congrats! You found out the secret code! You will recieve a prize! But if your irl name is Ben, then you can not claim this.');
  }
});

client.on('message', msg => {
  if (msg.content === 'DELET THIS') {
    msg.reply('http://i0.kym-cdn.com/photos/images/newsfeed/001/146/898/c9c.jpg');
  }
});

client.on('message', msg => {
  if (msg.content === 'Are you Kira') {
    msg.reply('HAHAHAHAHHAHAHAHAHAHAHHAHAHA THAT IS RIGHT... I AM KIRA...');
  }
});

client.login(process.env.BOT_TOKEN);
