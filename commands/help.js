const settings = require("../storage/settings.json");
const nekos = require('nekos.life');
const neko = new nekos();
const Discord = require('discord.js')
const snekfetch = require('snekfetch');
const db = require("quick.db");
const ms = require("parse-ms");
exports.run = async (client, message, args) => {
      message.delete().catch();
  let ico = client.user.avatarURL
    let embed = new Discord.RichEmbed()
    .setTitle("Help")
    .setDescription(`Waifu Help Commands prefix **ani!**\n\n**-about \n -cuddle \n-ship @user \n-hug @user \n-kill @user \n-kiss @user \n-lewd @user \n-pat @user \n-poke @user \n -slap @user \n-tickle @user \n**`)
    .setColor('0xffffff')
    .setThumbnail(ico)
    .setFooter(`Here you go ${message.author.username}.`)
message.author.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0,
};

exports.help = {
  name: "help",
  description: "help.",
  usage: "help",
};