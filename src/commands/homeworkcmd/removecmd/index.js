import { SlashCommandBuilder } from 'discord.js';
const fs = require('fs');

export const command = new SlashCommandBuilder()
    .setName('功課刪除')
    .setDescription('僅限特定伺服器可以用')

    .addNumberOption(Option =>
        Option.setName('第幾行')
            .setDescription('你要刪除掉第幾行的作業')
    )

export const action = async (interaction) => {

    if(interaction.guildId === process.env.CLASS_ID || interaction.guildId === process.env.DEVSERVER_ID)
    {

        const filePath = 'src/store/valuestore/homework.txt';
        let del = interaction.options.getNumber('第幾行');

        del = del - 1

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
            console.error(err);
            return;
            }
        
            const lines = data.split('\n');
                
            if (del >= 0 && del < lines.length) {
                    
            lines.splice(del, 1);
                
            const updatedContent = lines.join('\n');

            fs.writeFile(filePath, updatedContent, 'utf-8', (err) => {
                if (err) {
                console.error(err);
               return;
                }
                console.log(`已刪除第 ${del + 1} 行，刪除的人為${interaction.user.username}`);
            });
            } else {
            console.log(`無法找到第 ${del + 1} 行，可能不存在或超出範圍。`);
            }
        });

        
        await interaction.deferReply()
        await interaction.editReply('資料已刪除')

    }
    else
    {
        await interaction.deferReply()
        await interaction.editReply('很抱歉,這個指令目前只可供特定伺服器使用')
    }
}


