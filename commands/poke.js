const settings = require("../storage/settings.json");
const nekos = require('nekos.life');
const neko = new nekos();
const Discord = require('discord.js')
const superagent = require("superagent");
const db = require("quick.db");
const ms = require("parse-ms");
exports.run = async (client, message, args) => {
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
    let user = message.mentions.users.first()
   if(message.mentions.users.size < 1) return message.reply('You need to mention someone').then(msg => {msg.delete(3000)})
if(user.id == message.author.id) return message.reply(`Baka! you can't poke yourself`).then(msg => {msg.delete(3000)})
    
    if(lastHug !== null && lastCooldown - (Date.now() - lastHug) > 0) {
        let timeObj  = ms(lastCooldown - (Date.now() - lastHug));
        message.channel.send({embed: {
            title: "No Poke ATM!",
            color: 0xEC3B83,
            description: `You can use this again in **${timeObj.minutes}m** and **${timeObj.seconds}**s`
        }}).then(msg => {msg.delete(3000)})
    } else {
        message.channel.send(`${message.author} poke ${user}`)
let { url } = await neko.sfw.poke();
let kiss1 = new Discord.RichEmbed()
  .setDescription(`**${message.author.username}** Poke **${message.mentions.users.first().username}**!`)
  .setColor(0xEC3B83)
  .setImage(url)
message.channel.send(kiss1)
              db.set(`lastAction_${message.author.id}`, Date.now());
            db.set(`lastCooldown_${message.author.id}`, rr)
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["poke"],
  permLevel: 0,
};

exports.help = {
  name: "poke",
  description: "poke <@user>",
  usage: "poke <@user>",
};