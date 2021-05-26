const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const { JsonDatabase } = require("wio.db");
const db = new JsonDatabase('./datalar/database');;
let talkedRecently = new Set();
module.exports = async message => {
let prefix = db.get(`prefix_${message.guild.id}`) || ayarlar.prefix
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    let voted = await client.topgg_api.hasVoted(message.author.id)
    if(command === "bakım") return cmd.run(client, message, params)
    if(db.get(`bakım`)) return message.channel.send(`Bot bakımda.`)
      cmd.run(client, message, params)
  }
};
