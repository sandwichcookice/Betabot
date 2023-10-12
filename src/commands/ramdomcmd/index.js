import { SlashCommandBuilder,EmbedBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('ramdom')
    .setDescription('取隨機數(自行輸入數字)')

    .addNumberOption(Option =>
        Option.setName('number1')
            .setDescription('第一個數字(最小數)')
            .setRequired(true)
    )

    .addNumberOption(Option =>
        Option.setName('number2')
            .setDescription('第二個數字(最大數)')
            .setRequired(true)
    )


export const action = async (interaction) => {

    const number1 = interaction.options.getNumber('number1');
    const number2 = interaction.options.getNumber('number2');
    const final = Math.floor(Math.random()*(number2 - number1)+ 1);

    const embedramdom = new EmbedBuilder()
      .setTitle(`🎲| 數字是: ${final}`)
      .setColor("#5865F2");
    
      await interaction.deferReply()
      await interaction.editReply({embeds: [embedramdom]});

}