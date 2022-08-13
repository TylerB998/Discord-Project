//Getting access to the timezone function
const momentTimezone = require('moment-timezone')
//Getting access to the message collector function
const { MessageCollector } = require('discord.js')

import { DataResolver, Message } from "discord.js";
import { ICommand } from "wokcommands";

//Using the scheduled-schema program 
const scheduledSchema = require('../models/scheduled-schema')

export default {
    category: 'Daily Reminder',
    description: 'This command can be used so that I can remind you of important daily tasks. These tasks can range from, reminding you when to eat, when to drink water, when to take care of your pets, or even when you should be getting ready for sleep.\
    You may schedule these reminders at any time by typing in !dailyReminder (your channel you want your reminder to be put into - #reminder_channel)(The date [YYYY/MM/DD] - 2022/8/21)(A time [HH:MM AM or PM] - 10:30 AM)(TimeZone - America/Seattle) After you enter in the required information, ill ask you what you want to be reminded of throughout the day.',
    
    requiredPermissions: ['ADMINISTRATOR'],
    expectedArgs: '<Channel tag> <YYYY/MM/DD> <HH:MM> <"AM" or "PM"> <Timezone>',
    
    minArgs: 5,
    maxArgs: 5,
    init: (client: { guilds: { fetch: (arg0: any) => any; }; }) => {
        const checkForposts = async () => {
            const query = {
                date: {
                    $lte: Date.now()
                }
            }

            const results = await scheduledSchema.find(query)

            for (const post of results) {
                const {guildId, channelId, content } = post

                const guild = await client.guilds.fetch(guildId)
                if (!guild) {
                    continue
                }

                const channel = guild.channels.cache.get(channelId)
                if (!channel) {
                    continue
                }

                channel.send(content)
            }
            await scheduledSchema.deleteMany(query)

            setTimeout(checkForposts, 1000 * 10)
        }
        checkForposts()
    },
    callback: async ({ message, args }) => {
        
        const { mentions, guild, channel } = message

        
        const targetChannel = mentions.channels.first()
        
        if (!targetChannel) {
            message.reply('Please tag a channel to send your message in')
            return
        }

        //Remove the channel tag from the args array
        args.shift()

        const [ date, time, clockType, timeZone] = args

        if(clockType !== 'AM' && clockType !== 'PM') {
            message.reply(`You must either use "AM" or "PM", you entered in "${clockType}"`)
            return
        }

        const validTimeZones = momentTimezone.tz.names()
        if (!validTimeZones.includes(timeZone)) {
            message.reply(`Unknown timezone input, please enter in a valid timezone. (example:"America/Seattle") You entered in"${timeZone}`)
            return
        }

        const targetDate = momentTimezone.tz(
            `${date} ${time} ${clockType}`,
            'YYYY-MM-DD HH:mm A',
            timeZone
        )

        message.reply('Please enter in the message you want to be reminded of....')

        const filter = (newMessage: Message) => {
            return newMessage.author.id === message.author.id
        }

        const collector = new MessageCollector(channel, filter, {
            max: 1,
            time: 10000 
        })
        
        collector.on('collect', async (message: { content: string; reply: (arg0: { content: string; }) => void; }) => {
            
            console.log(message.content)
            if(message.content === 'owo' ){
                //message.reply({content: 'I heard you'
                console.log("nice")
                message.reply({content: 'Your message has been scheduled!'})
                return
                
            }
            await new scheduledSchema({
                date: targetDate.valueOf(),
                content: message.content,
                guildId: guild!.id,
                channelId: targetChannel.id
            }).save()
        }
    )    
    }
} as ICommand