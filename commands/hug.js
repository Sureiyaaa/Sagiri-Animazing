const settings = require("../storage/settings.json");
const Discord = require('discord.js')
const superagent = require("superagent");
const db = require("quick.db");
const ms = require("parse-ms");
const { hugP } = require('../assets/json/actions.json');
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
    if(lastHug !== null && lastCooldown - (Date.now() - lastHug) > 0) {
        let timeObj  = ms(lastCooldown - (Date.now() - lastHug));
        message.channel.send({embed: {
            title: "No Hugs ATM!",
            color: 0xEC3B83,
            description: `You can use this again in **${timeObj.minutes}m** and **${timeObj.seconds}**s`
        }}).then(msg => {msg.delete(3000)})
    } else {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);
    message.channel.send(`${message.author} hugged ${user}`)
    let hugEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**!`)
    .setImage(hugP[Math.round(Math.random() * (hugP.length - 1))])
    .setColor("0xEC3B83")

    message.channel.send(hugEmbed)
              db.set(`lastAction_${message.author.id}`, Date.now());
              db.set(`lastCooldown_${message.author.id}`, rr)
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hug"],
  permLevel: 0,
};

exports.help = {
  name: "hug",
  description: "Hug @user.",
  usage: "am!hug @user",
};