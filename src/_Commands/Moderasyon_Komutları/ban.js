const { Embed } = require("discord.js");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const beş_config = require("../../../beş_config.json")
const db = require("five.db").five();
const moment = require("moment");
moment.locale("tr");
module.exports = { 
    name: "ban",
    aliases: ["ban", "sik"],
    execute: async (client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!member) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Lütfen bir üye belirt.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        if (member.user.bot) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Botlar üzerinde bu işlemi kullanamazsın.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        if (!message.member.roles.cache.has(beş_config.staffRole) && !message.member.permissions.has("ADMINISTRATOR")) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Bu komutu için kullanmak için yeterli yetkin yok.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        if (member.roles.highest.position >= message.member.roles.highest.position && !client.owners.includes(message.author.id)) return  message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Bu üye senden yüksek yetkiye sahip.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        var reason = args.splice(1).join(" ")
        if(!reason) reason = "Sebep Belirtilmedi."
        // Database Ayrıntıları İçin: https://www.npmjs.com/package/five.db?activeTab=readme
        db.add(`cezapuan`, 25)
        db.set(`kullanıcı_${member.id}`,`\` BAN \` [${reason} - <t:${(Date.now() / 1000).toFixed()}>]`);
        await message.guild.members.ban(member.id, {reason: `${message.member.user.tag} Tarafından Yasaklandı!`})
        await message.reply({ embeds: [Ban = new EmbedBuilder().setColor("#2b2d31").setDescription(`✅ ${member} Kullanıcısı Başarıyla Sunucudan Yasaklandı!`)]})
        await message.guild.channels.cache.get(beş_config.banLog).send({ embeds: [BanLog = new EmbedBuilder().setColor("#2b2d31").setDescription(`${member} [\`${member.id}\`], Sunucudan Yasaklandı!\n\n \` > \` **Yetkili:** ${message.member} [\`${message.member.id}\`]\n \` > \` **Sebep:** ${reason} \n  \` > \` **Tarih:** <t:${(Date.now() / 1000).toFixed()}> [<t:${(Date.now() / 1000).toFixed()}:R>]`)]})
        let cezapuan = db.get(`cezapuan`) || 0;
        await message.guild.channels.cache.get(beş_config.cezapuanLog).send({ content: `${member}, Kullanıcısının ceza puanı **${cezapuan}** olarak güncellendi!` })
    }
}

// Developed Luppux - https://discord.gg/luppux