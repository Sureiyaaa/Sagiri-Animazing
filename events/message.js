const settings = require("../storage/settings.json");
const Discord = require('discord.js');
const client = new Discord.Client();
let cooldown = new Set()
let cdseconds = 2;
let id="341577240934613004";
let id2="206606985167110145";
module.exports = async (message) => {
  
  const user = message.author.id
  const { client } = message;
  var d = new Date;
  let dformat = [d.getHours(),
       d.getMinutes()].join(':');
  const intime = message.client.channels.find("id",'635441364892647444');
  if (message.author.bot) return;

  if (message.content.startsWith(settings.prefix)){
    const command = message.content.split(" ")[0].slice(settings.prefix.length);
    const params = message.content.split(" ").slice(1);
    const perms = client.elevation(message);
    let cmd;

    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    }
    if (cmd) {
      if (perms < cmd.conf.permLevel) {
        return message.author.send(["ERROR: Permission denied"]);
      }
    if(cooldown.has(user)){
      message.delete() 
      return message.reply("Command Cooldown 2 seconds").then(msg => {msg.delete(3000)});
    }
        cooldown.add(user);
      setTimeout(() => {
        cooldown.delete(user)
      }, cdseconds * 1000)
      cmd.run(client, message, params, perms);
    }
  }

};