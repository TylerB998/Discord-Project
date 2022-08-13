import { ICommand } from 'wokcommands';

export default {
    // The name of my command
    category: 'ainz',
    // The commands description
    description: 'Introduction command for Ainz Ooal Gown',

    // In order to use the command, the user must enter in '/' before the command
    slash: 'both',
    testOnly: true,

    // Callback is used to give the user the command information
    callback: ({ }) => {
        return 'Lord Ainz-Sama! Overlord of the Great Tomb of Nazarick! He is the commander of all of the floor guardians within Nazarick, and was the guild master to all the great supreme beings!' +    
        '\n ' +
        '\nHere is his wikipage:' + 
        '\nhttps://overlordmaruyama.fandom.com/wiki/Ainz_Ooal_Gown' +
        '\nhttps://comicvine.gamespot.com/a/uploads/original/11133/111339707/6509290-783779.jpg'
    },
} as ICommand