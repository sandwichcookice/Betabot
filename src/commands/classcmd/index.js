import { SlashCommandBuilder } from 'discord.js';
import { schoollist } from '../../store/funtions/schoolreply/schoolfunction';
import { useAppStore } from '@/store/app';


export const command = new SlashCommandBuilder()
    .setName('課表')
    .setDescription('僅限特定伺服器可以用')

    .addStringOption(Option =>
        Option.setName('特定日期')
            .setDescription('如果想知道特定天數，可選')
			.addChoices(
				{ name: '星期一', value: '1' },
                { name: '星期二', value: '2' },
                { name: '星期三', value: '3' },
                { name: '星期四', value: '4' },
                { name: '星期五', value: '5' },
            )
    )


export const action = async (interaction) => {

    const string = interaction.options.getString('特定日期')

    if(interaction.guildId === process.env.CLASS_ID || interaction.guildId === process.env.DEVSERVER_ID)
    {
        const appstore = useAppStore()
        const dayOfWeek = appstore.dayOfWeek;

        if( string != null)
        {
            if(string == '1')
            {
                await interaction.deferReply()
                await interaction.editReply(`${schoollist('monday.txt')}`)
            }
            else if(string == '2')
            {
                await interaction.deferReply()
                await interaction.editReply(`${schoollist('tuesday.txt')}`)
            }
            else if(string == '3')
            {
                await interaction.deferReply()
                await interaction.editReply(`${schoollist('wednesday.txt')}`)
            }
            else if(string == '4')
            {
                await interaction.deferReply()
                await interaction.editReply(`${schoollist('thursday.txt')}`)
            }
            else if(string == '5')
            {
                await interaction.deferReply()
                await interaction.editReply(`${schoollist('friday.txt')}`)
            }
        }
        else
        {
            if(dayOfWeek == 0 || dayOfWeek == 6)
            {
                await interaction.deferReply()
                await interaction.editReply('痾.. 你上課上到壞掉喔。。 現在放假阿')
            }
            else if(dayOfWeek == 1)
            {
                await interaction.deferReply()
                await interaction.editReply(`${schoollist('monday.txt')}`)
            }
            else if(dayOfWeek == 2)
            {
                await interaction.deferReply()
                await interaction.editReply(`${schoollist('tuesday.txt')}`)
            }
            else if(dayOfWeek == 3)
            {
                await interaction.deferReply()
                await interaction.editReply(`${schoollist('wednesday.txt')}`)
            }
            else if(dayOfWeek == 4)
            {
                await interaction.deferReply()
                await interaction.editReply(`${schoollist('thursday.txt')}`)
            }
            else if(dayOfWeek == 5)
            {
                await interaction.deferReply()
                await interaction.editReply(`${schoollist('friday.txt')}`)
            }
        }
    }
    else
    {
        await interaction.deferReply()
        await interaction.editReply('很抱歉,這個指令目前只可供特定伺服器使用')
    }
    
}