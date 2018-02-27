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
    msg.reply('HAHAHAHAHHAHAHAHAHAHAHHAHAHA! THAT IS RIGHT... I AM KIRA...');
  }
});

client.on('message', msg => {
  if (msg.content === 'BTD') {
    msg.reply('JUST MENTIONED THE FORBIDDEN GAME @everyone!! WATCH HIM GET BANNED!!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Problem') {
    msg.reply('The developer will get to you asap.');
  }
});

client.on('message', msg => {
  if (msg.content === 'Download') {
    msg.reply('You can download Alfred here - https://thirsty-yam.glitch.me/download.html');
  }
});

client.on('message', msg => {
  if (msg.content === 'Other Programs') {
    msg.reply('Perhaps this might interest you? https://github.com/NamesJoeyWheeler/Millenium-Eye My creator made it.');
  }
});

client.login(process.env.BOT_TOKEN);
