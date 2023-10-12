import { SlashCommandBuilder } from 'discord.js';

const fs = require('fs');

export const command = new SlashCommandBuilder()
    .setName('歌曲推薦')
    .setDescription('推薦給小惡魔一首歌')
    .addStringOption(Option =>
        Option.setName('網址')
            .setDescription('歌曲網址')
            .setRequired(true)
    )

export const action = async (interaction) => {

    const filePath = 'src/store/funtions/msgreply/songrecommendationstore/songrecommendation.txt';
    const url = interaction.options.getString('網址');

    fs.appendFile(filePath, url + '\n', (err) => {
        if (err) 
        {
          console.error('写入文件出错：', err);
        } 
        else {
          console.log(`歌曲已儲存(網址:${url})(給網址的伺服器是:${interaction.guild.name})(給網址的人是:${interaction.user.tag})`);
        }
    });

    await interaction.deferReply({ ephemeral: true });
    await interaction.editReply(`感謝你提供歌曲(您提供的歌曲網址${url})`);

}