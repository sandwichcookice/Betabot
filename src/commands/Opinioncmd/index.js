import { SlashCommandBuilder } from 'discord.js';
const fs = require('fs');


export const command = new SlashCommandBuilder()
    .setName('意見提供')
    .setDescription('提供你的意見給我們')

    .addStringOption(Option =>
        Option.setName('哪種類型')
            .setDescription('選擇你想提供的意見的類型')
            .setRequired(true)
			.addChoices(
				{ name: 'bug', value: 'bug' },
				{ name: '建議', value: 'suggestion' },
            )
    )

    .addStringOption(Option =>
        Option.setName('你想提供的東西')
            .setDescription('輸入你想提供的東西')
            .setRequired(true)

    )


export const action = async (interaction) => {

    const filePath = 'src/store/Opinions/Opinion.txt';
    const filePath_bug = 'src/store/Opinions/bugs.txt';
    const genre = interaction.options.getString('哪種類型');
    const txt = interaction.options.getString('你想提供的東西')

    if (genre == 'bug')
    {
        fs.appendFile(filePath_bug, txt + '\n', (err) => {
            if (err) 
            {
                console.error('意見提供寫入文件出错：', err);
            } 
            else
            {
                console.log(`bug文件已儲存,記得修改,(給bug的伺服器是:${interaction.guild.name})(給bug的人是:${interaction.user.tag})`);
            }
        });
    }
    else
    {
        fs.appendFile(filePath, txt + '\n', (err) => {
            if (err) 
            {
                console.error('意見提供寫入文件出错：', err);
            } 
            else
            {
                console.log(`建議已儲存(給建議的伺服器是:${interaction.guild.name})(給建議的人是:${interaction.user.tag})`);
            }
        });
    }

    await interaction.deferReply({ ephemeral: true });
    await interaction.editReply(`感謝你提供寶貴的意見(您提供的意見副本為:${txt})`);
    
}