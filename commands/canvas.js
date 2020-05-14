const settings = require("../storage/settings.json");
const Discord = require("discord.js")
const Canvas = require('canvas')
const { shorten } = require('../utils/utils.js');
const ms = require("parse-ms");
const db = require("quick.db");
const snekfetch = require('node-superfetch')
exports.run = async (client, message, args) => {
      message.delete().catch();

 let lines = [
      "2",
      "3"
    ]
    let linesresult = Math.floor((Math.random() * lines.length));

    let linesresults = Math.floor((Math.random() * lines.length));
  
  
   let randomline = [
      "PERFECT SHIP!",
      "DON'T TAKE IT SERIOUSLY!"
    ]
    let ranresults = Math.floor((Math.random() * randomline.length));
     let lewdline = [
      "OMG!",
      "LEWD!"
    ]
    let lewdresults = Math.floor((Math.random() * lewdline.length));
       let zeroline = [
      "NOT meant to be!",
      "SOMEBODY'S GAY!"
    ]
    let zeroresults = Math.floor((Math.random() * zeroline.length));
          let icos = "https://cdn.discordapp.com/attachments/601911598302494720/620923491180609574/AnimazingServerIcon.gif"
  var ship = Math.floor(Math.random() * 100) + 1;
  let mention = message.mentions.users.first()
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(message.mentions.users.size < 1) return message.reply('You need to mention somebody to ship with.').then(msg => {msg.delete(3000)})
            message.delete().catch();
            const randomcd = [
              180000,
              240000,
              300000,
              360000,
              420000,
              480000,
              540000,
              600000
            ];
      const random = Math.floor(Math.random() * randomcd.length);
    let rr = randomcd[random]            
    let lastHug = await db.get(`lastAction_${message.author.id}`);
    let lastCooldown = await db.get(`lastCooldown_${message.author.id}`);
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

     if(lastHug !== null && lastCooldown - (Date.now() - lastHug) > 0) {
        let timeObj  = ms(lastCooldown - (Date.now() - lastHug));
        message.channel.send({embed: {
            title: "No Ship ATM!",
            color: 0xcc0000,
            description: `You can use this again in **${timeObj.minutes}m** and **${timeObj.seconds}**s`
        }}).then(msg => {msg.delete(3000)})
    } else if(ship === 100) {
          const canvas = Canvas.createCanvas(650, 350);
  const ctx = canvas.getContext('2d');

  const {body: d} = await snekfetch.get("https://i.imgur.com/KhrBJor.png")
  const {body: a} = await snekfetch.get(mention.avatarURL)
  const {body: b} = await snekfetch.get(message.author.avatarURL)
  const {body: c} = await snekfetch.get("https://i.imgur.com/pWxlxA7.png")
  const dwa = await Canvas.loadImage(d)
  const avatar = await Canvas.loadImage(a)  
  const image = await Canvas.loadImage(c)
  const avatar2 = await Canvas.loadImage(b)
  ctx.drawImage(image, 0, 0, 650, 350)
  ctx.drawImage(avatar, 80, 70, 200, 200)
  ctx.drawImage(avatar2, 395  , 70, 200, 200)
  ctx.drawImage(dwa, 13, 0, 650, 350)
  ctx.font = "35px sans-serif";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillText(`${ship}%`, 300, 180)
  ctx.textAlign = "center";
  ctx.font = "45px sans-serif";
  ctx.fillStyle = "rgb(100, 70, 84)";
  ctx.fillText(shorten(mention.username, lines[linesresults]) + shorten(message.author.username, lines[linesresult]), 340, 50)
  ctx.textAlign = "center";
  ctx.font = "35px sans-serif";
  ctx.fillStyle = "rgb(100, 70, 84)";
  ctx.fillText(randomline[ranresults], 335, 312)
  ctx.textAlign = "center";

  await message.channel.send(`Ship Name: **` + shorten(mention.username, lines[linesresults]) + shorten(message.author.username, lines[linesresult]) + `**`)
  await  message.channel.send(new Discord.Attachment(canvas.toBuffer(), 'ship.png'))
  db.set(`lastAction_${message.author.id}`, Date.now());
      db.set(`lastCooldown_${message.author.id}`, rr)
  } else if (ship === 0) {
          const canvas = Canvas.createCanvas(650, 350);
  const ctx = canvas.getContext('2d');
  const {body: d} = await snekfetch.get("https://i.imgur.com/KhrBJor.png")
  const {body: a} = await snekfetch.get(mention.avatarURL)
  const {body: b} = await snekfetch.get(message.author.avatarURL)
  const {body: c} = await snekfetch.get("https://i.imgur.com/pWxlxA7.png")
  const dwa = await Canvas.loadImage(d)
  const avatar = await Canvas.loadImage(a)  
  const image = await Canvas.loadImage(c)
  const avatar2 = await Canvas.loadImage(b)
  ctx.drawImage(image, 0, 0, 650, 350)
  ctx.drawImage(avatar, 80, 70, 200, 200) 
  ctx.drawImage(avatar2, 395  , 70, 200, 200)
  ctx.drawImage(dwa, 13, 0, 650, 350)
  ctx.font = "35px Arial";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillText(`${ship}%`, 310, 180)
  ctx.textAlign = "center";
  ctx.font = "45px sans-serif";
  ctx.fillStyle = "rgb(27, 100, 80)";
  ctx.fillText(zeroline[zeroresults], 350, 50)
  await message.channel.send(`Ship Name: **` + shorten(mention.username, lines[linesresults]) + shorten(message.author.username, lines[linesresult]) + `**`) 
  await  message.channel.send(new Discord.Attachment(canvas.toBuffer(), 'ship.png'))
  db.set(`lastAction_${message.author.id}`, Date.now());
      db.set(`lastCooldown_${message.author.id}`, rr)
  } else if (ship === 69) {
      const canvas = Canvas.createCanvas(650, 350);
  const ctx = canvas.getContext('2d');
  const {body: d} = await snekfetch.get("https://i.imgur.com/KhrBJor.png")
  const {body: a} = await snekfetch.get(mention.avatarURL)
  const {body: b} = await snekfetch.get(message.author.avatarURL)
  const {body: c} = await snekfetch.get("https://i.imgur.com/pWxlxA7.png")
  const dwa = await Canvas.loadImage(d)
  const avatar = await Canvas.loadImage(a)  
  const image = await Canvas.loadImage(c)
  const avatar2 = await Canvas.loadImage(b)
  ctx.drawImage(image, 0, 0, 650, 350)
  ctx.drawImage(avatar, 80, 70, 200, 200)
  ctx.drawImage(avatar2, 395  , 70, 200, 200)
  ctx.drawImage(dwa, 13, 0, 650, 350)
  ctx.font = "35px Arial";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillText(`${ship}%`, 310, 180)
  ctx.textAlign = "center";
  ctx.font = "45px sans-serif";
  ctx.fillStyle = "rgb(63, 0, 38)";
  ctx.fillText(lewdline[lewdresults], 350, 50)
  await message.channel.send(`Ship Name: **` + shorten(mention.username, lines[linesresults]) + shorten(message.author.username, lines[linesresult]) + `**`)
  await  message.channel.send(new Discord.Attachment(canvas.toBuffer(), 'ship.png'))
  db.set(`lastAction_${message.author.id}`, Date.now());
      db.set(`lastCooldown_${message.author.id}`, rr)
  } else {
  const canvas = Canvas.createCanvas(650, 350);
  const ctx = canvas.getContext('2d');
  const {body: d} = await snekfetch.get("https://i.imgur.com/KhrBJor.png")
  const {body: a} = await snekfetch.get(mention.avatarURL)
  const {body: b} = await snekfetch.get(message.author.avatarURL)
  const {body: c} = await snekfetch.get("https://i.imgur.com/pWxlxA7.png")
  const dwa = await Canvas.loadImage(d)
  const avatar = await Canvas.loadImage(a)  
  const image = await Canvas.loadImage(c)
  const avatar2 = await Canvas.loadImage(b)
  ctx.drawImage(image, 0, 0, 650, 350)
  ctx.drawImage(avatar, 80, 70, 200, 200)
  ctx.drawImage(avatar2, 395  , 70, 200, 200)
  ctx.drawImage(dwa, 13, 0, 650, 350)
  ctx.font = "35px Arial";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillText(`${ship}%`, 310, 180)

  await message.channel.send(`Ship Name: **` + shorten(mention.username, lines[linesresults]) + shorten(message.author.username, lines[linesresult]) + `**`)
  await  message.channel.send(new Discord.Attachment(canvas.toBuffer(), 'ship.png'))
  db.set(`lastAction_${message.author.id}`, Date.now());
      db.set(`lastCooldown_${message.author.id}`, rr)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ship", "ship"],
  permLevel: 0,
};

exports.help = {
  name: "ship",
  description: "Ship of Animazing Bot.",
  usage: "ship",
};