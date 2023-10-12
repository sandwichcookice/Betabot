import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('math')
    .setDescription('數學運算(加減乘除)')

    .addNumberOption(Option =>
        Option.setName('number1')
            .setDescription('運算式裡的第一個數字')
            .setRequired(true)
    )

    .addStringOption(Option =>
        Option.setName('operator')
            .setDescription('運算子')
            .setRequired(true)
			.addChoices(
				{ name: '+', value: 'plus' },
				{ name: '-', value: 'minus' },
				{ name: '*', value: 'multiply' },
                { name: '/', value: 'Divided' },
            )
    )

    .addNumberOption(Option =>
        Option.setName('number2')
            .setDescription('運算式裡的第二個數字')
            .setRequired(true)
    )

    
    

export const action = async (interaction) => {

    const number1 = interaction.options.getNumber('number1');
    const number2 = interaction.options.getNumber('number2');
    const operator = interaction.options.getString('operator');

    if (operator == 'plus')
    {
        await interaction.deferReply()
        await interaction.editReply(`${number1} + ${number2} = ${number1+number2}`)
    }
    else if (operator == 'minus')
    {
        await interaction.deferReply()
        await interaction.editReply(`${number1} - ${number2} = ${number1-number2}`)
    }
    else if (operator == 'multiply')
    {
        await interaction.deferReply()
        await interaction.editReply(`${number1} * ${number2} = ${number1*number2}`)
    }
    else if (operator == 'Divided')
    {
        await interaction.deferReply()
        await interaction.editReply(`${number1} / ${number2} = ${Math.floor(number1/number2)}`)
    }
    
}