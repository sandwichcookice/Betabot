import { SlashCommandBuilder } from 'discord.js';
const fs = require('fs');

export const command = new SlashCommandBuilder()
    .setName('功課')
    .setDescription('僅限特定伺服器可以用')

export const action = async (interaction) => {

    if(interaction.guildId === process.env.CLASS_ID || interaction.guildId === process.env.DEVSERVER_ID)
    {

        const filePath = 'src/store/valuestore/homework.txt';

        let response;

        response = fs.readFileSync(filePath, 'utf-8')

        if(response == '')
        {
            response = '空空如也，目前沒有功課。'
        }
        else
        {
            await interaction.deferReply()
            await interaction.editReply(response)
        }
    }
    else
    {
        await interaction.deferReply()
        await interaction.editReply('很抱歉,這個指令目前只可供特定伺服器使用')
    }
}


