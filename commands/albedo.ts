import { ICommand } from "wokcommands";

export default {
    // The name of my command
    category: 'albedo',
    // The commands description
    description: 'Introduction command for Albedo.',

    // In order to use the command, the user must enter in '/' before the command
    slash: 'both',
    testOnly: true,

    // Callback is used to give the user the command information
    callback: ({ }) => {
        return 'Lady Albedo. She is the Overseer of the Guardians of the Great Tomb of Nazarick & Ainzs right hand woman. Overall, she is a wonderful woman, even with her minor flaws....' +
        '\nFor more information, here is her wikipage:' +
        '\nhttps://overlordmaruyama.fandom.com/wiki/Albedo' +
        '\nhttps://static.wikia.nocookie.net/legendsofthemultiuniverse/images/5/55/Albedo_pose.jpg/revision/latest?cb=20180718024412'
    },
} as ICommand