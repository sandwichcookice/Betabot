import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('邀請連結')
    .setDescription('機器人邀請連結(目前不開放)')

export const action = async (interaction) => {
    
    if (interaction.user.id === process.env.DEVUSER_ID) {
        await interaction.deferReply({ ephemeral: true });
        await interaction.editReply(`https://discord.com/api/oauth2/authorize?client_id=1131273742396428493&permissions=8&scope=bot`);
    } else {
        await interaction.deferReply()
        await interaction.editReply('抱歉，目前本指令暫不開放。');
    }

}