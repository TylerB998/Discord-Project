import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import WOKCommands from 'wokcommands'
import path from 'path'
import mongoose from 'mongoose'
dotenv.config()

// Getting my scheduledSchema code added to my project
const scheduledSchema = require('../DiscordBot1/models/scheduled-schema')

const client = new DiscordJS.Client({
    // For my bot to work intents are used to properly gain access to specific parts of discord
    // These parts are: The guild (server), the channels, the server members, the messages, 
    // the bans, and directly message users if needed.
    intents: [ Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.DIRECT_MESSAGES],
})

// Turning on the client
client.on('ready', async() => {
    // Message given to the user when the bot is online
    console.log('The bot is ready')

    new WOKCommands(client, {
        // The name of the local folder for my command files (using the file path name)
        commandsDir: path.join(__dirname, 'commands'),
        // Allow importing of .ts files if i'm using ts-node, which for this project I am
        typeScript: true,
        testServers: '953546116098568253',
        // Gaining access to the MongoDB database
        mongoUri: process.env.MONGO_URI,
        dbOptions: {}
      })

})
// Logging into my mongoDB server using the process.env file, the TOKEN, and the MONGO_URI
client.login(process.env.TOKEN)