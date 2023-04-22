const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const db = require("five.db").five();
module.exports = {
    name: "avatar",
    aliases: ["avatar","av"],
    execute: async (client, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let Link = new ActionRowBuilder({components:[new ButtonBuilder({label:"Tarayıcıda Aç", style:ButtonStyle.Link, url: member.user.displayAvatarURL({dynamic:true})})]})
        await message.reply({
          embeds: [Avatar = new EmbedBuilder().setColor("#2b2d31").setImage(`${member.user.displayAvatarURL({dynamic:true, format:"png"})}`)],
          components:[Link]
        })
        if(message) await message.react("✅")
 }
}

// Developed Luppux - https://discord.gg/luppux