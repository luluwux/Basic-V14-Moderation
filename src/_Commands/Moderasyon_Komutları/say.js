const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const db = require("five.db").five();
module.exports = {
    name: "say",
    aliases: ["say","ss"],
    execute: async (client, message, args) => {
    let MCount =await message.guild.memberCount;
    let VCount =await message.guild.members.cache.filter(x=> x.voice.channel).size;
    message.reply({embeds:[new EmbedBuilder().setColor("#2b2d31").setAuthor({name:message.guild.name, iconURL: message.guild.iconURL({dynamic:true})}).setDescription(`\` ❯ \` Sunucuda toplam **${MCount}** kullanıcı bulunuyor\n\` ❯ \` Sunucuda toplam **${VCount}** kullanıcı ses kanallarında bulunuyor.`)]})} 
}

// Developed Luppux - https://discord.gg/luppux