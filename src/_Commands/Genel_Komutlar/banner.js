const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const { DiscordBanners } = require('discord-banners');
const db = require("five.db").five();
module.exports = {
    name: "banner",
    aliases: ["banner","afis"],
    execute: async (client, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const discordBanners = new DiscordBanners(client);
        const banner = await discordBanners.getBanner(member.id, { size: 2048, format: "png", dynamic: true })
        if(banner){   
       let Link = new ActionRowBuilder({components:[new ButtonBuilder({label:"Tarayıcıda Aç", style:ButtonStyle.Link, url: banner})]})
        await message.reply({ embeds: [Banner = new EmbedBuilder().setColor("#2b2d31").setImage(`${banner}`)] , components:[Link] })}
            if(message) await message.react("✅")
        else message.react("❎")
    }
}

// Developed Luppux - https://discord.gg/luppux