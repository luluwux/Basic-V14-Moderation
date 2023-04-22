const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const db = require("five.db").five();
module.exports = {
    name: "git",
    aliases: ["git"],
    execute: async (client, message, args) => {
        const member = await message.mentions.members.first() || await message.guild.members.cache.get(args[0])
        if(!member) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Lütfen bir üye belirt.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        if(member.id == message.member.id) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Kendi yanına gidemezsin.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        if(!message.member.voice) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Herhangi bir ses kanalında bulunmuyorsunuz.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        if(!member.voice.channel) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Belirtiğiniz üye herhangi bir ses kanalında bulunmuyor.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
        // Developed by Approval - discord.gg/luppux 
        const Menu = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId("evet").setLabel("✅ Kabul Et").setStyle(ButtonStyle.Success), new ButtonBuilder().setCustomId("hayir").setLabel("❎ Reddet").setStyle(ButtonStyle.Danger),)
        if(member.voice){
       message.channel.send({ content:`[${member}]`, embeds:[ Want = new EmbedBuilder().setColor("#2b2d31").setDescription(`${message.member}, Kullanıcısı senin bulunduğun ses kanalına [${member.voice.channel}] gelmek istiyor.\n\n ✅ Kabul Et\n ❎ Reddet`)], components:[Menu]
       }).then(async msg =>{
         var filter = (button) => button.user.id === member.id;
         const collector = msg.createMessageComponentCollector({ filter, time: 30000*2 })
         collector.on('collect', async (button, user) => {
           if(message) await message.react("✅")
           if(button.customId == "evet"){
           if(!message.member.voice || !message.member.voice.channel) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Herhangi bir ses kanalında bulunmuyorsunuz.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
           await message.member.voice.setChannel(member.voice.channel);
           await message.channel.send({content:`${message.member}, **${member.voice.channel.name}** kanalına taşındınız!`})
           await button.reply({embeds:[Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`✅ ${message.member}, Kullanıcısı bulunduğunuz ses kanalına [${member.voice.channel}] çekildi!`)],ephemeral:true})
           if(msg && msg.deletable) await msg.delete();
           if(message && message.deletable) await message.delete();
           } else if (button.customId == "hayir"){
           await message.channel.send({content:`**[${message.member}]**`,embeds:[Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ ${member}, Kullanıcısı bulunduğu ses kanalına [${member.voice.channel}] gitme isteğinizi reddetti!`)]})
           if(msg && msg.deletable) await msg.delete();
           if(message && message.deletable) await message.delete();
       
        } 
        })
    })
    }
 }
}

// Developed Luppux - https://discord.gg/luppux