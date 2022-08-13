import { ICommand } from "wokcommands";

export default {
    // The name of my command
    category: 'help',
    // The commands description
    description: 'help command with list of all other commands',

    // In order to use the command, the user must enter in '/' before the command
    slash: 'both',
    testOnly: true,

    // Callback is used to give the user the command information
    callback: ({ }) => {
        return '♛Here is my list of commands♛' + 
        '\n' +  
        '\nAssistant commands:' +
        '\n!calendar: Command to let me know when important events are happening.' +
        '\n-------------------------------------------------------------------' +
        '\n!dailyReminder: This command can be used so that I can remind you of important daily tasks. These tasks can range from, reminding you when to eat, when to drink water, when to take care of your pets, or even when you should be getting ready for sleep.' +
        '\n' +
        '\n[NOTE!] You may schedule these reminders at any time by typing in !dailyReminder (your channel you want your reminder to be put into - #reminder_channel)(The date [YYYY/MM/DD] - 2022/8/21)(A time [HH:MM AM or PM] - 10:30 AM)(TimeZone - America/Seattle)' +
        '\nAfter you enter in the required information, ill ask you what you want to be reminded of throughout the day.' +
        '\n-------------------------------------------------------------------' +
        '\nCharacter introductions and information commands:' +
        '\n!demiurge: My introduction command explaining who I am.' + 
        '\n!ainz: Introduction command for Ainz Ooal Gown.' + 
        '\n!albedo: Introduction command for Albedo.'
     },
} as ICommand