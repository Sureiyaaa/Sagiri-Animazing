const settings = require("../storage/settings.json");
const Discord = require("discord.js")
exports.run = async (client, message, args) => {
      message.delete().catch();
      let ico = client.user.avatarURL
var embed = new Discord.RichEmbed()
        .setTitle("Animaazing / Sagiri Bot")
        .setDescription("**Animazing Bot is an Official Bot of Animazing Discord Server and is Currently in Beta Testing with Action Commands Powered by Inori Yuzuriha Bot**")
        .addField("Author", " ```@Sureiya``` ", true)
        .addField("Bot Version", " ```Beta 2.6``` ", true)
        .setColor(0xffffff)
        .setThumbnail(ico)
        .setFooter("© Sureiyā#3654", client.user.avatarURL)
        message.channel.sendEmbed(embed).then(msg => {msg.delete(30000)})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "info"],
  permLevel: 0,
};

exports.help = {
  name: "about",
  description: "Info of Animazing Bot.",
  usage: "info",
};