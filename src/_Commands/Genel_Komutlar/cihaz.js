const { Embed } = require("discord.js");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const db = require("five.db").five();
module.exports = {
    name: "cihaz",
    aliases: ["cihaz"],
    execute: async (client, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        if(member.presence && member.presence.clientStatus){
        let a = Object.keys(member.presence.clientStatus); 
        let b = a.map(x=>x.replace("web", `🌍 Internet Tarayıcısı`).replace("desktop",`🖥️  Masa Üstü Uygulaması (PC)`).replace("mobile",`📱 Telefon`));
        if(message) await message.react("✅")
        if(message.member.id == member.id){
        message.reply({embeds:[Cihaz = new EmbedBuilder().setColor("#2b2d31").setDescription(`Bağlandığın cihazlar aşağıda verilmiştir:\n`).addFields({name:"Cihazlar ("+a.length+")",value:`${b.join("\n")}`})]})
        } else {
        message.channel.send({embeds:[Cihaz = new EmbedBuilder().setColor("#2b2d31").setDescription(`${member} kullanıcısının bağlandığı cihazlar aşağıda verilmiştir:`).addFields({name:"Cihazlar ("+a.length+")",value:`${b.join("\n")}`})]})
        }} else {message.reply({content:`${member.id == message.member.id ? `bağlandığın cihazları bulamıyorum`:`**${member.user.tag}** kullanıcısının bağlandığı cihazları bulamıyorum :(`}`})}
    
 }
}

// Developed Luppux - https://discord.gg/luppux