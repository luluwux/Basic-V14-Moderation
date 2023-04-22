const { Embed } = require("discord.js");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const beş_config = require("../../../beş_config.json")
const db = require("five.db").five();
const moment = require("moment");
moment.locale("tr");
module.exports = { 
    name: "unban",
    aliases: ["unban"],
    execute: async (client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const id = args[0];
        if(!id) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Lütfen bir üye belirt.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        // Database Ayrıntıları İçin: https://www.npmjs.com/package/five.db?activeTab=readme
        db.sub(`cezapuan`, 5)
        db.set(`kullanıcı`,`${id}`)
        db.set(`tarih`,`<t:${(Date.now() / 1000).toFixed()}>`)
        await message.guild.members.unban(id, {reason: `Yasak ${message.member.user.tag} Tarafından Kaldırıldı!`})
        await message.reply({ embeds: [Ban = new EmbedBuilder().setColor("#2b2d31").setDescription(`✅ <@${id}> Kullanıcısı Başarıyla Sunucudan Yasağı Kaldırıldı!`)]})
        await message.guild.channels.cache.get(beş_config.banLog).send({ embeds: [BanLog = new EmbedBuilder().setColor("#2b2d31").setDescription(`<@${id}> [\`${id}\`], Kullanıcısının <t:${(Date.now() / 1000).toFixed()}> [<t:${(Date.now() / 1000).toFixed()}:R>] Sunucudan Yakağı Kaldırıldı!`)]})
        let cezapuan = db.get(`cezapuan`) || 0;
        await message.guild.channels.cache.get(beş_config.cezapuanLog).send({ content: `<@${id}>, Kullanıcısının ceza puanı **${cezapuan}** olarak güncellendi!` })
    }
}

// Developed Luppux - https://discord.gg/luppux