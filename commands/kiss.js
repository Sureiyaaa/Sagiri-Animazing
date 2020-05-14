const settings = require("../storage/settings.json");
const nekos = require('nekos.life');
const neko = new nekos();
const Discord = require('discord.js')
const superagent = require("superagent");
const db = require("quick.db");
const ms = require("parse-ms");
  const { kissP } = require('../assets/json/actions.json');
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
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if(message.mentions.users.size < 1) return message.reply('You need to mention someone').then(msg => {msg.delete(3000)})
if(user.id == message.author.id) return message.reply('You can not kiss yourself baka!').then(msg => {msg.delete(3000)})
    
    if(lastHug !== null && lastCooldown - (Date.now() - lastHug) > 0) {
        let timeObj  = ms(lastCooldown - (Date.now() - lastHug));
        message.channel.send({embed: {
            title: "No Kiss ATM!",
            color: 0xEC3B83,
            description: `You can use this again in **${timeObj.minutes}m** and **${timeObj.seconds}**s`
        }}).then(msg => {msg.delete(3000)})
    } else {
message.channel.send(`${message.author} kissed ${user}`)
let { url } = await neko.sfw.kiss();
let kiss1 = new Discord.RichEmbed()
  .setDescription(`**${message.author.username}** kissed **${message.mentions.users.first().username}**!`)
  .setColor(0xEC3B83)
  .setImage(kissP[Math.round(Math.random() * (kissP.length - 1))])
  message.channel.send(kiss1)
            db.set(`lastAction_${message.author.id}`, Date.now());
            db.set(`lastCooldown_${message.author.id}`, rr)
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kiss"],
  permLevel: 0,
};

exports.help = {
  name: "kiss",
  description: "Hug @user.",
  usage: "am!hug @user",
};