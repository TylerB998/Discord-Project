const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const scheduledSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    content: reqString,
    guildId: reqString,
    channelId: reqString,
})

const names = 'reminder-posts'

module.exports = mongoose.model[names] || mongoose.model(names, scheduledSchema, names)