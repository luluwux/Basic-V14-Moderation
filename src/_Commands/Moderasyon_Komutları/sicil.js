const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const db = require("five.db").five();
const beş_config = require("../../../beş_config.json")
module.exports = {
    name: "sicil",
    aliases: ["sicil"],
    execute: async (client, message, args, beş_embed) => {

var member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.member;
if(member) {
let cezapuan = db.get(`cezapuan`) || 0;
const lulu = db.get(`kullanıcı_${member.id}`)
var data = db.has("cezapuan",true)
if(!data) return message.reply({ embeds: [Sex = new EmbedBuilder().setColor("#2b2d31").setDescription(`❎ Bu Kullanıcının sicili kaydı bulunmamakta.`)] }).then(x=> setTimeout(() => {x.delete()}, 5000))
message.reply({ embeds: [Sicil = new EmbedBuilder().setColor("#2b2d31").setDescription(`${lulu}`)]});
var member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; }
}}

// Developed Luppux - https://discord.gg/luppux
