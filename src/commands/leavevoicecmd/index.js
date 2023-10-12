import { SlashCommandBuilder } from 'discord.js';
import {useAppStore} from "@/store/app"

export const command = new SlashCommandBuilder()
    .setName('離開頻道')
    .setDescription('讓小惡魔離開頻道')


export const action = async (interaction) => {

    const member = interaction.member;
    const appstore = useAppStore()

    if (member.voice.channel) 
    {
        appstore.connection.destroy()
      if (interaction.user.id === process.env.DEVUSER_ID)
      {
          await interaction.deferReply();
          await interaction.editReply(`掰掰各位，我爸叫我回家睡覺。`)
      }
      else
      {
          await interaction.deferReply();
          await interaction.editReply(`${interaction.user.tag}讓我離開了頻道。`)
      }
    } 
    else 
    {
        await interaction.deferReply();
        await interaction.editReply(`你需要在語音頻道才能執行這個指令`)
    }

}