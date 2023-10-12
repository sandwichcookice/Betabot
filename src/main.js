import { Client,GatewayIntentBits,ActivityType} from 'discord.js'
import vueinit from '@/core/vue'
import dotenv from "dotenv"
import {useAppStore} from "@/store/app"
import {loadcommands, loadevents} from '@/core/loader'
import { replycommand } from '@/commands_reply/common_reply'
import { timeset } from '@/store/funtions/timeset/timesetfunction'
import { scheduleJob } from 'node-schedule'
import { schoollist } from '@/store/funtions/schoolreply/schoolfunction';

const fs = require('fs');

const { generateDependencyReport } = require('@discordjs/voice');

vueinit()
dotenv.config()

const client = new Client({ intents: [

    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers,

] })

const appstore = useAppStore()
appstore.client = client

loadcommands()
loadevents()
replycommand()

client.login(process.env.TOKEN);

export const activitie = async () => {

    client.user.setPresence({ 
        activities: [{ 
            name: 'fate/grand order',
            type: ActivityType.Playing,
        }], 
        status: 'online' 
    });
    console.log('活動狀態上線')
}

client.on('error', (error) => {
    console.error('An error occurred:', error);
    console.log('噴錯了 重新上線中')
    client.login(process.env.TOKEN);
    console.log('重新上線*')
    timeset()
    console.log(`現在時間:${appstore.year}/${appstore.month}/${appstore.day}(${daysOfWeek[appstore.dayOfWeek]}) ${appstore.hours}:${appstore.minutes}:${appstore.seconds}`)
  });

console.log(generateDependencyReport());

timeset();
const daysOfWeek = ['禮拜天', '禮拜一', '禮拜二', '禮拜三', '禮拜四', '禮拜五', '禮拜六'];
console.log(`現在時間:${appstore.year}/${appstore.month}/${appstore.day}(${daysOfWeek[appstore.dayOfWeek]}) ${appstore.hours}:${appstore.minutes}:${appstore.seconds}`)