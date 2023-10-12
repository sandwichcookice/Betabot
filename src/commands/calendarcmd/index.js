import { SlashCommandBuilder } from 'discord.js';


export const command = new SlashCommandBuilder()
    .setName('行事曆')
    .setDescription('僅限特定伺服器可以用')


export const action = async (interaction) => {

    await interaction.deferReply()
    await interaction.editReply('我目前還無法用QAQ(我爸爸在努力了)')

}