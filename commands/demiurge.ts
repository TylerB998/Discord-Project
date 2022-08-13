import { ICommand } from "wokcommands";

export default {
    // The name of my command
    category: 'demiurge',
    // The commands description
    description: 'My (Demiurge) introduction command explaining who I am.',

    // In order to use the command, the user must enter in '/' before the command
    slash: 'both',
    testOnly: true,

    // Callback is used to give the user the command information
    callback: ({ }) => {
        return 'I am Demiurge, the loyal servant of Ainz Ooal Gown and the Floor Guardian of the 7th Floor of the Great Tomb of Nazarick.' + 
        '\nMy job as a bot is to assist you in multiple different ways. If you wish to know specificially what my list of commands are type /help and I can explain them each in detail.' +
        '\nHere is my wiki page to learn more about me:' + 
        '\nhttps://overlordmaruyama.fandom.com/wiki/Demiurge'+
        '\nhttps://c4.wallpaperflare.com/wallpaper/872/945/197/anime-overlord-demiurge-overlord-wallpaper-preview.jpg'
    },
} as ICommand