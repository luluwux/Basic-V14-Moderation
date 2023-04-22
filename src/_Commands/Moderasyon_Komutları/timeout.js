const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const beş_config = require("../../../beş_config.json")
const db = require("five.db").five();
const ms = require("ms");
module.exports = {
    name: "timeout",
    aliases: ["timeout","time"],
    execute: async (client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!member) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Lütfen bir üye belirt.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        if (member.user.bot) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Botlar üzerinde bu işlemi kullanamazsın.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        if (!message.member.roles.cache.has(beş_config.staffRole) && !message.member.permissions.has("ADMINISTRATOR")) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Bu komutu için kullanmak için yeterli yetkin yok.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        if (member.roles.highest.position >= message.member.roles.highest.position && !client.owners.includes(message.author.id)) return  message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Bu üye senden yüksek yetkiye sahip.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        var duration = args[1]
        duration = ms(duration)
        if(!duration || !ms(duration)) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Lütfen bir süre [Örn: 1s - 1m - 1h - 1d] belirtin.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        var reason = args.splice(2).join(" ")
        if(!reason) reason = "Sebep Belirtilmedi."
        // Database Ayrıntıları İçin: https://www.npmjs.com/package/five.db?activeTab=readme
        db.add(`cezapuan`, 10)
        db.set(`kullanıcı_${member.id}`,`\` TİMEOUT \` [${reason} - <t:${(Date.now() / 1000).toFixed()}>]`);
        await member.timeout(duration, reason)
        await message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`✅ ${member}, Kullanıcısına Başarıyla Timeout Atıldı.`)]})
        await message.guild.channels.cache.get(beş_config.timeoutLog).send({ embeds: [TimeoutLog = new EmbedBuilder().setColor("#2b2d31").setDescription(`${member} [\`${member.id}\`], Sunucuda Timeout Atıldı!\n\n \` > \` **Yetkili:** ${message.member} [\`${message.member.id}\`]\n \` > \` **Sebep:** ${reason} \n  \` > \` **Tarih:** <t:${(Date.now() / 1000).toFixed()}> [<t:${(Date.now() / 1000).toFixed()}:R>]`)]})
        let cezapuan = db.get(`cezapuan`) || 0;
        await message.guild.channels.cache.get(beş_config.cezapuanLog).send({ content: `${member}, Kullanıcısının ceza puanı **${cezapuan}** olarak güncellendi!` })
    }
}

// Developed Luppux - https://discord.gg/luppux