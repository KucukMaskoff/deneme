const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
const chalk = require("chalk")
const { JsonDatabase } = require("wio.db");
const db = new JsonDatabase('./datalar/database');
require('./event-util/eventLoader')(client);;

//----------Dosyaları Tanımlama----------//
client.commands= new Discord.Collection();
client.aliases= new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
    fs.readdir(`./komutlar/${f}/`, (err, filess) => {
      if (err) console.error(err);
      console.log(chalk.green(`${f} Klasöründen`)+chalk.red(` ${filess.length} Komut Yüklenecek;`));
      filess.forEach(fs => {
        let props = require(`./komutlar/${f}/${fs}`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(aliases => client.aliases.set(aliases, props.help.name))
      });
    });
  });
});
//----------Dosyaları Tanımlama Son----------//

client.login('ODQ3MDY4NzYzMjAzNDM2NTQ0.YK4sQg.jgAZJKrTfjVtnYuhM-HE7qqeEng')

//----------Komutlar----------//
//----------Oynuyor----------//
client.on('ready', () => {
	client.user.setActivity(`${client.guilds.cache.size} Sunucu > http://shadow-chasters.cf > s!yardım`);
})
//----------Oynuyor Son----------//