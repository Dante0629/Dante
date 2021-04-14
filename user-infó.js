const { Client, Message, MessageEmbed } = require("discord.js");
const moment = require('moment')
moment.locale('HU')

module.exports = (client) => {

client.on('guildMemberAdd', async(member, message) => {
    const Channel = member.guild.channels.cache.get('831457489186455562') 

    
    const embed = new MessageEmbed()
        .setColor('RED')
        .setThumbnail('https://i2.wp.com/er23.hu/wp-content/uploads/2018/07/logo-big-information.png?fit=272%2C244&ssl=1') 
        .setTitle(`**${member.user.username}-ról információk:**`)
        .addFields(
            {
                name: `**Tag tag-je:**`,
                value: `${member.user.tag}`
            },
            {
                name: `**Tag ID-ja:**`,
                value: `${member.id}`
            },
            {
                name: `**Csatlakozás dátuma:**`,
                value: new Date(member.joinedTimestamp).toLocaleDateString()
            },
            {
                name: `**Account létrehozásának a dátuma:**`,
                value: `${moment.utc(member.user.createdAt).format('LLLL')}`
            }
            )
        .setTimestamp()
        .setFooter(`Létrehozva:`)

   Channel.send(embed)
    })
} 
