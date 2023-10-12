import { SlashCommandBuilder,EmbedBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('色碼電阻計算')
    .setDescription('可供計算色碼電阻的值')

    .addStringOption(Option =>
        Option.setName('第一環')
            .setDescription('第一環色碼')
            .addChoices(
                {name:'黑', value: '0'},
                {name:'棕', value: '1'},
                {name:'紅', value: '2'},
                {name:'橙', value: '3'},
                {name:'黃', value: '4'},
                {name:'綠', value: '5'},
                {name:'藍', value: '6'},
                {name:'紫', value: '7'},
                {name:'灰', value: '8'},
                {name:'白', value: '9'},
            )
    )

    .addStringOption(Option =>
        Option.setName('第二環')
            .setDescription('第二環色碼')
            .addChoices(
                {name:'黑', value: '0'},
                {name:'棕', value: '1'},
                {name:'紅', value: '2'},
                {name:'橙', value: '3'},
                {name:'黃', value: '4'},
                {name:'綠', value: '5'},
                {name:'藍', value: '6'},
                {name:'紫', value: '7'},
                {name:'灰', value: '8'},
                {name:'白', value: '9'},
            )
    )

    .addStringOption(Option =>
        Option.setName('第三環')
            .setDescription('第三環色碼')
            .addChoices(
                {name:'黑', value: '0'},
                {name:'棕', value: '1'},
                {name:'紅', value: '2'},
                {name:'橙', value: '3'},
                {name:'黃', value: '4'},
                {name:'綠', value: '5'},
                {name:'藍', value: '6'},
                {name:'紫', value: '7'},
                {name:'灰', value: '8'},
                {name:'白', value: '9'},
            )
    )

    .addStringOption(Option =>
        Option.setName('倍率環')
            .setDescription('第四環色碼(值的平方)')
            .addChoices(
                {name:'黑', value: '0'},
                {name:'棕', value: '1'},
                {name:'紅', value: '2'},
                {name:'橙', value: '3'},
                {name:'黃', value: '4'},
                {name:'綠', value: '5'},
                {name:'藍', value: '6'},
                {name:'紫', value: '7'},
                {name:'金', value: '-1'},
                {name:'銀', value: '-2'},
            )
    )

    .addStringOption(Option =>
        Option.setName('誤差環')
            .setDescription('第五環色碼(誤差)')
            .addChoices(
                {name:'棕', value: '1'},
                {name:'紅', value: '2'},
                {name:'綠', value: '0.5'},
                {name:'藍', value: '0.25'},
                {name:'紫', value: '0.1'},
                {name:'灰', value: '0.05'},
                {name:'金', value: '5'},
                {name:'銀', value: '10'},
            )
    )







export const action = async (interaction) => {

    let value
    let response
    let c1 = interaction.options.getString('第一環')
    let c2 = interaction.options.getString('第二環')
    let c3 = interaction.options.getString('第三環')
    const c4 = Math.pow(10, interaction.options.getString('倍率環'))
    const c5 = interaction.options.getString('誤差環')
    

    if( c4 != null)
    {
        if(c1 != null && c2 != null && c3 == null && c5 == null) //三環色碼電阻
        {
            c1 = c1 * 10
            c2 = c2 * 1
            value = c1 + c2
            response = `${value * c4}Ω +- 20%`
        }
        else if(c1 != null && c2 != null && c3 == null && c5 != null) //四環色碼電阻
        {
            c1 = c1 * 10
            c2 = c2 * 1
            value = c1 + c2
            response = `${value * c4}Ω +- ${c5}%`
        }
        else if(c1 != null && c2 != null && c3 != null && c5 != null) //五環色碼電阻
        {
            c1 = c1 * 100
            c2 = c2 * 10
            c3 = c3 * 1
            value = c1 + c2 + c3
            response = `${value * c4}Ω +- ${c5}%`
        }
        else
        {
            response = `你確定你的資料沒有輸入錯誤?`
        }        
    }
    else
    {
        response = `請記得輸入倍率環`
    }
    
    
    await interaction.deferReply()
    await interaction.editReply(response)

}