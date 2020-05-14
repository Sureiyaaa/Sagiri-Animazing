const settings = require("../storage/settings.json");
const Discord = require("discord.js")
exports.run = async (client, message, args) => {
      message.delete().catch();
      let ico = client.user.avatarURL
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var embed = new Discord.RichEmbed()
        .setDescription(time)
        .setColor(0xffffff)

        message.channel.sendEmbed(embed).then(msg => {msg.delete(30000)})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["time"],
  permLevel: 0,
};

exports.help = {
  name: "time",
  description: "Info of Animazing Bot.",
  usage: "info",
};