const Discord = require("discord.js");
let cpuusage = process.cpuUsage();
let cpu = Math.floor(cpuusage.user/cpuusage.system) + "%";
var upSecs = 0;
var upMins = 0;
var upHours = 0;
var upDays = 0;
var upWeeks = 0;
setInterval(function() {
    upSecs = upSecs + 1
    if (upSecs >= 60) {
        upSecs = 0
        upMins = upMins + 1
    }
    if (upMins >= 60) {
        upMins = 0
        upHours = upHours + 1
    }
    if (upHours >= 24) {
        upHours = 0
        upDays = upDays + 1
    }
}, 1000)
const ownerID = "341577240934613004";
const ownerID2 = "440182635143364608";
exports.run = async (client, message, args) => {
      if (message.author.id !== ownerID ) {
      return message.channel.send("You are not Authorized to use this Command.")
      }
    
  let API = (client.ping).toFixed(2)
  let ico = client.user.avatarURL

  const statusembed = new Discord.RichEmbed()
        .setTitle("Sagiri Status")
        .setDescription(`\`\`\`yaml\n
-                Animazing Status             -
- Users      :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
- Channels   :: ${client.channels.size.toLocaleString()}
- Uptime     :: ${upHours} Hour(s), ${upMins} Min(s) ${upSecs} Sec(s)
-
-                  Sagiri Info                -
- Ping       :: ${new Date().getTime() - message.createdTimestamp} ms
- API        :: ${API} ms
- Cpu Usage  :: ${cpu} / 100%
- RSS        :: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}
- Heap Used  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / 512 mb
-
-               Framework Version             -  
- Discord.js :: v11.5.1
- Node.js    :: v8.15.1\`\`\``)
        .setColor(0xffffff)
        .setThumbnail(ico)
        .setFooter("Inori Status")
    message.channel.send(statusembed).then(msg => {msg.delete(10000)})
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stats"],
  permLevel: 0,
};

exports.help = {
  name: "status",
  description: "Shows information of Inori",
  usage: "status",
};