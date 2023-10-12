import {useAppStore} from "@/store/app"
import {replyfuntion} from "@/store/funtions/msgreply/msgreplyfuntion"
import { timeset } from '@/store/funtions/timeset/timesetfunction';

export const replycommand = async() => {

    const appstore = useAppStore()
    const client = appstore.client

    client.on('messageCreate', message => {
        if (message.author.bot) return;

        if (message.content === '早安')
        {
            if (message.author.id === process.env.DEVUSER_ID)
            {
                message.reply(replyfuntion('devreply','goodmonring.txt'));
            }
            else
            {
                message.reply(replyfuntion('userreply','goodmonring.txt'));
            }
        }
        if (message.content === '女兒給我首歌')
        {
            if (message.author.id === process.env.DEVUSER_ID)
            {
                message.reply(`好的爸爸~ 我推薦這首給你: ${replyfuntion('songreply','songlinkreply.txt')}`);
            }
        }
        if (message.content == '還有多久下課阿女兒')
        {
            if (message.author.id === process.env.DEVUSER_ID)
            {
                timeset()

                if(appstore.hours <= 8)
                {
                    message.reply(`爸.. 你是不是上課上到頭昏了? 還沒開始上課呀( ˘•ω•˘ )`)
                }
                else if(appstore.hours >= 16)
                {
                    message.reply(`爸.. 你是不是上課上到頭昏了? 早就下課了(´-ω-｀)`)
                }
                else
                {
                    message.reply(`還有${15 - appstore.hours}小時,${59 - appstore.minutes}分,${60 - appstore.seconds}秒才下課哦~~`)
                }
            }
        }
    })
}