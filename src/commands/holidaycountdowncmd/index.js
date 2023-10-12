import { SlashCommandBuilder } from 'discord.js';
const fs = require('fs');
const path = require('path');

export const command = new SlashCommandBuilder()
    .setName('假期倒數')
    .setDescription('看看長假還剩多少天吧')

    .addStringOption(Option =>
        Option.setName('哪個假期')
            .setDescription('選擇你想詢問的假期')
            .setRequired(true)
			.addChoices(
				{ name: '暑假', value: '2' },
				{ name: '寒假', value: '4' },
            )
    )


export const action = async (interaction) => {

    const holiday = interaction.options.getString('哪個假期');
    let thelineoftxt = null;
    if (holiday == 2)
    {
        thelineoftxt = 1
    }
    else if (holiday == 4)
    {
        thelineoftxt = 3
    }
    const filePath = path.join(__dirname, 'holiday.txt')
    const data = fs.readFileSync(filePath, 'utf-8').split('\n').map(line => line.trim());
    const targetTimestampMillis = parseInt(data[thelineoftxt], 10) * 1000;

    const currentTimestampMillis = Date.now();

    let timeDiffMillis = targetTimestampMillis - currentTimestampMillis;

    const daysDiff = Math.floor(timeDiffMillis / (1000 * 60 * 60 * 24)); //計算天數
    timeDiffMillis = timeDiffMillis - daysDiff * (1000 * 60 * 60 * 24); //計算減掉天術後的剩餘時間

    const hoursDiff = Math.floor(timeDiffMillis / (1000 * 60 * 60)); //計算小時
    timeDiffMillis = timeDiffMillis - hoursDiff * (1000 * 60 * 60); //計算減掉小時後的剩餘時間

    const minutesDiff = Math.floor(timeDiffMillis / (1000 * 60)); //計算分鐘
    timeDiffMillis = timeDiffMillis - minutesDiff * (1000 * 60); //計算減掉分鐘後的剩餘時間

    const secondsDiff = Math.floor(timeDiffMillis / 1000); //計算秒數

    if(holiday == 2)
    {
        await interaction.deferReply()
        await interaction.editReply(`距離暑假開始還剩:${daysDiff}天,${hoursDiff}小時,${minutesDiff}分鐘,${secondsDiff}秒`)
    }
    else if(holiday == 4)
    {
        await interaction.deferReply()
        await interaction.editReply(`距離寒假開始還剩:${daysDiff}天,${hoursDiff}小時,${minutesDiff}分鐘,${secondsDiff}秒`)
    }
    
}