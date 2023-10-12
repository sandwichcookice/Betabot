import { SlashCommandBuilder } from 'discord.js';
import { joinVoiceChannel } from '@discordjs/voice';
import {useAppStore} from "@/store/app"
const { VoiceConnectionStatus } = require('@discordjs/voice');

export const command = new SlashCommandBuilder()
    .setName('加入語音')
    .setDescription('讓小惡魔加入語音頻道')

export const action = async (interaction) => {

    const appstore = useAppStore()
    const vc = interaction.member.voice.channel

    if(!vc){
        interaction.deferReply()
        return interaction.editReply(`你不在語音頻道。 請加入語音頻道後再使用這個指令。`)
    }

    const connection = joinVoiceChannel({
        channelId: vc.id,
        guildId: interaction.guildId,
        adapterCreator: interaction.guild.voiceAdapterCreator,
    });

    appstore.connection = connection;
    connection.on(VoiceConnectionStatus.Ready, () => {
        console.log(`已加入頻道: ${vc.name}`);
    });
    await interaction.deferReply()
    await interaction.editReply(`已加入頻道: ${vc.name}`);

}