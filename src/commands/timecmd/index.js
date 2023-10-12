import { SlashCommandBuilder,EmbedBuilder } from 'discord.js'
import { useAppStore } from '@/store/app';
import { timeset } from '@/store/funtions/timeset/timesetfunction';

export const command = new SlashCommandBuilder()
    .setName('台灣時間')
    .setDescription('獲取台灣的準確時間')

export const action = async (interaction) => {

    const a = useAppStore()

    timeset()

    const daysOfWeek = ['禮拜天', '禮拜一', '禮拜二', '禮拜三', '禮拜四', '禮拜五', '禮拜六'];

    const embedtimereply = new EmbedBuilder()
        .setTitle(`台灣現在時間(標準)`)
        .setDescription(`${a.year}/${a.month}/${a.day}(${daysOfWeek[a.dayOfWeek]}) ${a.hours}:${a.minutes}:${a.seconds}`)
        .setColor(0x3498db);

    await interaction.deferReply()
    await interaction.editReply({embeds:[embedtimereply]})
}