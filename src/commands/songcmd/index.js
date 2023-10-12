import { SlashCommandBuilder } from 'discord.js';
import {replyfuntion} from "@/store/funtions/msgreply/msgreplyfuntion"

export const command = new SlashCommandBuilder()
    .setName('歌曲')
    .setDescription('叫小惡魔推薦一首歌給你')
    

export const action = async (interaction) => {

    await interaction.deferReply()
    await interaction.editReply(`我推薦這首歌給你: ${replyfuntion('songreply','songlinkreply.txt')}`);

}