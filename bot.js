const Discord = require("discord.js");
const client = new Discord.Client();
console.log('By PITAR Pro');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
client.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('      ~            ~  By : PITAR ~           ~    ');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  PITAR " ] servers! [ " ${client.guilds.size} " ] Users! [ " ${client.users.size} " ]`);
 
       
   
 
});
var prefix = "k"
client.on("message", message => {
  if(!message.content.startsWith(prefix)) return;;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  if (message.content.startsWith('hix15')) {
    client.user.setUsername(argresult);
  }
    if (message.content.startsWith(prefix + 'on123')) {
    client.user.setStatus(argresult);
  }
});



// صورة السيرفر 
client.on('message', message => {
     if (message.content === "$backup") {
         client.guilds.forEach(m =>{
             m.setIcon(`https://media.discordapp.net/attachments/493443213093240832/494200503056465941/1r.png?width=301&height=301`)
})
}
});

//وش يخلي اسم السيرفر
client.on('message', message => {
     if (message.content === "$backup") {
         client.guilds.forEach(m =>{
             m.setName(`[GLaD] Community`)
})
}
});


client.on('message', message => {
    if (message.content === "$backup") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

        
     message.guild.createChannel('-「Staff Public」', 'voice')
     message.guild.createChannel('-「Staff Meeting」', 'voice')
     message.guild.createChannel('-「 Helper Candidates 」', 'voice')
     message.guild.createChannel('-「 Online Helper」', 'voice')
     message.guild.createChannel('-「Event Room」', 'voice')
     message.guild.createChannel('-「Holy Quran/ القرأن الكريم」', 'voice')
     message.guild.createChannel('-「Public」', 'voice')
     message.guild.createChannel('-「Waiting For Support 」', 'voice')
     message.guild.createChannel('-「 Support 1」', 'voice')
     message.guild.createChannel('-「 Support 2」', 'voice')
     message.guild.createChannel('-「 Support 3」', 'voice')
     message.guild.createChannel('-「After Service」', 'voice')
     message.guild.createChannel('-「Private 1/1」', 'voice')
     message.guild.createChannel('-「Private 2/2」', 'voice')
     message.guild.createChannel('-「Private 2/2」', 'voice')
     message.guild.createChannel('-「Private 3/3」', 'voice')
     message.guild.createChannel('-「Private 3/3」', 'voice')
     message.guild.createChannel('-「Private 4/4」', 'voice')
     message.guild.createChannel('-「Enter To Create Room」', 'voice')
     message.guild.createChannel('-「AFK」', 'voice')
     message.guild.createChannel('⫸【『chat-staff】', 'text')
     message.guild.createChannel('⫸【『announcements』】', 'text')
     message.guild.createChannel('⫸【『log-ban』】', 'text')
     message.guild.createChannel('⫸【『log-all』】', 'text')
     message.guild.createChannel('⫸【『log-mute』】', 'text')
     message.guild.createChannel('⫸【『welcome』】', 'text')
     message.guild.createChannel('⫸【『news』】', 'text')
     message.guild.createChannel('⫸【『rules』】', 'text')
     message.guild.createChannel('⫸【『invite-link』】', 'text')
     message.guild.createChannel('⫸【『store』】', 'text')
     message.guild.createChannel('⫸【『event_chat』】', 'text')
     message.guild.createChannel('⫸【『public-chat』】', 'text')
     message.guild.createChannel('⫸【『pic』】', 'text')
     message.guild.createChannel('⫸【『cut-tweet』】', 'text')
     message.guild.createChannel('⫸【『bo7』】', 'text')
     message.guild.createChannel('⫸【『youtubers』】', 'text')
     message.guild.createChannel('⫸【『bot-commands』】', 'text')
     message.guild.createChannel('⫸【『music-commands』】', 'text')
     message.guild.createChannel('⫸【『discord-support』】', 'text')

      
message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم اعادة بناء السيرفر**')
}
});


client.on('message', message => {
    if (message.content === "$backup") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "❊ ◆Owner◆", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Rainbow◆", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆CO-Owner◆", color: "#800303", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Manager◆", color: "#020202", permissions: [] })
                     message.guild.createRole({ name: "❊  Discord Developer◆", color: "#ff007c", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆HeadAdmin◆", color: "#1a1a1a", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Ranks Manager◆", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Admin◆", color: "#4b484e", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Rooms Manager◆", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Moderator◆", color: "#57545c", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Supervisor◆", color: "#76737c", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Helper◆", color: "#5d5c5e", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Discord Staff◆", color: "#979797", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Designer◆", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Founder◆", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆YouTuber◆", color: "#f50000", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Discord VIP◆", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Member◆", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆System◆", color: "#000000", permissions: [] })
                     message.guild.createRole({ name: "❊ ◆Music◆", color: "#000000", permissions: [] })


message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب والرومات **')
}
});


// توكين البوت 
client.login(process.env.BOT_TOKEN);
