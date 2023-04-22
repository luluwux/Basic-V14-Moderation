const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const client = global.client = new Client({fetchAllMembers: true,intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMembers,GatewayIntentBits.GuildBans,GatewayIntentBits.GuildEmojisAndStickers,GatewayIntentBits.GuildIntegrations,GatewayIntentBits.GuildWebhooks,GatewayIntentBits.GuildInvites,GatewayIntentBits.GuildVoiceStates,GatewayIntentBits.GuildPresences,GatewayIntentBits.GuildMessages,GatewayIntentBits.GuildMessageReactions,GatewayIntentBits.GuildMessageTyping,GatewayIntentBits.MessageContent],scopes:[OAuth2Scopes.Bot, OAuth2Scopes.ApplicationsCommands],partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User,Partials.GuildMember, Partials.ThreadMember, Partials.GuildScheduledEvent],ws: {version: "10"}});
const beş_config = require("./beş_config.json")
const { readdir } = require("fs");
const db = require("five.db").five();
const { REST } = require('@discordjs/rest');
const { Routes } = require("discord-api-types/v10");
const commands = client.commands = new Collection();
const aliases = client.aliases = new Collection();

readdir("./src/_Commands/", (err, files) => {if (err) console.error(err)
files.forEach(f => {readdir("./src/_Commands/" + f, (err2, files2) => {
if (err2) console.log(err2)
files2.forEach(file => {let beş_prop = require(`./src/_Commands/${f}/` + file);
console.log(`🧮 [LULUSHU - COMMANDS] ${beş_prop.name} Yüklendi!`);
commands.set(beş_prop.name, beş_prop);
beş_prop.aliases.forEach(alias => {aliases.set(alias, beş_prop.name);});});});});});

readdir("./src/beş_events", (err, files) => {
if (err) return console.error(err);
files.filter((file) => file.endsWith(".js")).forEach((file) => {let beş_prop = require(`./src/beş_events/${file}`);
if (!beş_prop.conf) return;
client.on(beş_prop.conf.name, beş_prop);
console.log(`📚 [LULUSHU - EVENTS] ${beş_prop.conf.name} Yüklendi!`);});});

Collection.prototype.array = function() {return [...this.values()]}
client.kanalbul = function(kanalisim) {let kanal = client.guilds.cache.get(beş_config.guildID).channels.cache.find(k => k.name === kanalisim)
return kanal;}
client.rolbul = function(rolisim) {let rol = client.guilds.cache.get(beş_config.guildID).roles.cache.find(r => r.name === rolisim)
return rol;}
client.rolinc = function(rolisim) {let rol = client.guilds.cache.get(beş_config.guildID).roles.cache.find(r => r.name.includes(rolisim))
return rol;}
client.login(beş_config.token).then(() => console.log(`🟢 ${client.user.tag} Başarıyla Giriş Yaptı!`)).catch((beş_err) => console.log(`🔴 Bot Giriş Yapamadı / Sebep: ${beş_err}`));
