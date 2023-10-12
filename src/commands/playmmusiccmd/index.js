import { createAudioPlayer, createAudioResource } from '@discordjs/voice';
import { SlashCommandBuilder } from 'discord.js';
import {useAppStore} from "@/store/app"
const { join } = require('node:path');


export const command = new SlashCommandBuilder()
    .setName('播放歌曲')
    .setDescription('讓小惡魔撥放歌曲(目前測試)')


export const action = async (interaction) => {

    // const appstore = useAppStore()

    // const audioplayer = createAudioPlayer()
    // const resource = createAudioResource(join(__dirname,'..','..','store','audio','ずっと真夜中でいいのに。『残機』MV (ZUTOMAYO - Time Left) (128 kbps).mp3'),{ inlineVolume: true });

    // audioplayer.play(resource);
    // appstore.connection.subscribe(audioplayer);

    // audioplayer.on('stateChange', (newState) => {
    //     if (newState.status === 'playing') {
    //         console.log('now is playing')
    //         resource.volume.setVolume(1);
    //     }
    // });

    await interaction.deferReply()
    await interaction.editReply('我目前還無法撥放歌曲QAQ(我爸爸在努力了)')

}