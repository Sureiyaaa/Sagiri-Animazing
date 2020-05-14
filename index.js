const Discord = require("discord.js");
const client = new Discord.Client({ forceFetchUsers: true });
const config = require("./storage/settings.json")
const discord_token = config.discord_token; 
const settings = require("./storage/settings.json");
const YouTube = require('simple-youtube-api');
const Youtube_API_Key = "AIzaSyBWa_eKP825qDc1GQ-P2ZnR1WZxYKQJ7vc"
const youtube = new YouTube(Youtube_API_Key); 
const ytdl = require('ytdl-core');
const queue = new Map();
const fs = require("fs");
const utils = require('./utils/utils');
const moment = require("moment");
require("./storage/eventLoader")(client);
require("dotenv").config();
const YouTubeAPIKey = "AIzaSyBWa_eKP825qDc1GQ-P2ZnR1WZxYKQJ7vc"
const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    const props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.queue = new Map();
process.on("unhandledRejection", console.error);

client.reload = command =>
  new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      const cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((fcmd, alias) => {
        if (fcmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });

client.elevation = message => {
 
  const adminRole = message.guild.roles.find("name", settings.adminRoleName);

  
  if (adminRole && message.member.roles.has(adminRole.id)) {
    return 10;
  }


  if (message.member.permissions.has("MANAGE_MESSAGES")) {
    return 1;
  }


  return 0;
};


client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
 let prefix = config.prefix
  
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;  

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// MUSIC Section


client.login(discord_token);