const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Modal, TextInputBuilder, PermissionsBitField, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const db = require("five.db").five();
module.exports = {
    name: "sil",
    aliases: ["sil","delete"],
    execute: async (client, message, args) => {
      if( [PermissionsBitField.Flags.Administrator,PermissionsBitField.Flags.ManageRoles,PermissionsBitField.Flags.BanMembers,PermissionsBitField.Flags.KickMembers,].some(x=> message.member.permissions.has(x))){   
    let miktar = args[0];
    if(!miktar || !Number(miktar) || (miktar < 0 || miktar > 100)) return message.reply({content:"Lütfen **1-100** arasında bir değer girerek tekrar deneyiniz"})
    await message.channel.bulkDelete(miktar).then(async x=>{
       message.channel.send({content:`Toplam **${miktar}** adet mesaj silindi.`}).then(y=> setTimeout(() => {if(y) y.delete();},5000 ))})
  } 
 }
}

// Developed Luppux - https://discord.gg/luppux