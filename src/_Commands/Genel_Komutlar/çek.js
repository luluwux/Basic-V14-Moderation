const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const db = require("five.db").five();
module.exports = {
    name: "çek",
    aliases: ["çek","al"],
    execute: async (client, message, args) => {
        const member = await message.mentions.members.first() || await message.guild.members.cache.get(args[0])
        if(!member) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Lütfen bir üye belirt.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        if(member.id == message.member.id) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Kendi yanına gidemezsin.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        if(!message.member.voice) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Herhangi bir ses kanalında bulunmuyorsunuz.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        if(!member.voice.channel) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Belirtiğiniz üye herhangi bir ses kanalında bulunmuyor.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        await member.voice.setChannel(message.member.voice.channel);
        await message.channel.send({content:`${message.member}, **${member.voice.channel.name}** kanalına taşındı!`})
 }
}

// Developed Luppux - https://discord.gg/luppux