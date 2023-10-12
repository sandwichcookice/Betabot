import { SlashCommandBuilder } from 'discord.js';
const fs = require('fs');

export const command = new SlashCommandBuilder()
    .setName('功課增加')
    .setDescription('僅限特定伺服器可以用')

    .addStringOption(Option =>
        Option.setName('科目')
            .setDescription('選擇哪個科目,沒有的自行輸入')
            .setRequired(true)
            .addChoices(
                { name: '國文', value: '國文' },
                { name: '英文', value: '英文' },
                { name: '數學', value: '數學' },
                { name: '物理', value: '物理' },
                { name: '社會', value: '社會' },
                { name: '其他', value: '其他' },
            )
    )

    .addStringOption(Option =>
        Option.setName('書本')
            .setDescription('要寫哪本,沒有的自行輸入')
            .setRequired(true)
    )

    .addNumberOption(Option =>
        Option.setName('頁數1')
            .setDescription('開始寫的頁數(週記一篇寫1)')
            .setRequired(true)  
    )

    .addNumberOption(Option =>
        Option.setName('頁數2')
            .setDescription('要寫到的頁數(週記一篇寫1)')
            .setRequired(true)  
    )

    .addStringOption(Option =>
        Option.setName('完成時間')
            .setDescription('何時以前要完成')
            .setRequired(true)
    )

export const action = async (interaction) => {

    if(interaction.guildId === process.env.CLASS_ID || interaction.guildId === process.env.DEVSERVER_ID)
    {

        const filePath = 'src/store/valuestore/homework.txt';

        const suject = interaction.options.getString('科目');
        const book = interaction.options.getString('書本');
        const p1 = interaction.options.getNumber('頁數1');
        const p2 = interaction.options.getNumber('頁數2');
        const ftime = interaction.options.getString('完成時間');

        let add;

        if (p1 == p2)
        {
            add = `${suject}-${book} P.${p1} ${ftime}前完成`
        }
        else
        {
            add = `${suject}-${book} P.${p1}~P.${p2} ${ftime}前完成`
        }
        
        
        fs.appendFile(filePath, add + '\n', (err) => {
            if (err) 
            {
                console.error('功課寫入文件出错：', err);
            } 
            else
            {
                console.log(`功課寫入文件已儲存,寫入的人是:${interaction.user.username})`);
            }
        });

        await interaction.deferReply()
        await interaction.editReply('資料已儲存')
    }
    else
    {
        await interaction.deferReply()
        await interaction.editReply('很抱歉,這個指令目前只可供特定伺服器使用')
    }
}


