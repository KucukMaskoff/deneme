const Discord = require("discord.js");
exports.run = (client, message) => {
  const YardımEmbed = new Discord.MessageEmbed()
    .setDescription(`
**Komutu Listesi**
**<a:moderasyon:840193483255709728> s!moderasyon**
**\`Moderasyon Komutlarını Görürsünüz\`**
**<a:hahaha:840596711842906123> s!eğlence**
**\`Eğlence Komutlarını Görürsünüz\`**
**<:kullanici:840596831083429898> s!kullanıcı**
\`Kullanıcı Komutlarını Görürsünüz\`
**<:bot:840596806777569291> s!bot**
\`Bot Komutlarını Görürsünüz\`
**<:gif_emoji:841741964395413524> s!gif**
\`Gif Komutlarını Görürsünüz\`
**<a:oyee:842022011341504552> s!logo**
\`Logo Komutlarını Görürsünüz\`
**<:developer:840596775844053042> s!sahip**
\`Bu Komutu Sadece Sahibim Kullanabilir\`
**[Destek Sunucusu](https://discord.gg/2aa4wJECEx)** **•** **[Davet Linki](https://discord.com/oauth2/authorize?client_id=814948557009453096&scope=bot&permissions=805314622)**`)
    .setImage(`https://media.discordapp.net/attachments/840179613635182642/842807225009045514/standard_1.gif`)
    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(YardımEmbed).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','y','Yardım','Y'],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "yardım"
};
