import { SlashCommandBuilder } from 'discord.js';

export const command = new SlashCommandBuilder()
    .setName('色碼電阻轉換')
    .setDescription('將輸入的阻值轉換為色碼電阻')

    .addNumberOption(Option =>
        Option.setName('電阻值')
            .setDescription('像是32000之類的電阻值')
            .setRequired(true)
    )

    .addStringOption(Option =>
        Option.setName('誤差值')
            .setDescription('色碼電阻的誤差值')
            .addChoices(
                {name:'5%',value:'5'},
                {name:'10%',value:'10'},
                {name:'1%',value:'1'},
                {name:'2%',value:'2'},
                {name:'0.5%',value:'50'},
                {name:'0.25%',value:'250'},
                {name:'0.1%',value:'100'},
                {name:'0.05%',value:'500'},
            )
    )

export const action = async (interaction) => {

    const num = interaction.options.getNumber('電阻值')
    const dm = interaction.options.getString('誤差值')
    const numstring = num.toString()
    const numlong = numstring.length
    const numlist = numstring.split('')
    var lastlist = new Array()
    var response = new Array()
    let i,msg;

    function chack(num,i){
       
        if(num == 0)
            response[i] = '黑'
        else if(num==1)
            response[i] = '棕'
        else if(num==2)
            response[i] = '紅'
        else if(num==3)
            response[i] = '橙'
        else if(num==4)
            response[i] = '黃'
        else if(num==5)
            response[i] = '綠'
        else if(num==6)
            response[i] = '藍'
        else if(num==7)
            response[i] = '紫'
        else if(num==8)
            response[i] = '灰'
        else if(num==9)
            response[i] = '白'
    }
 
    function longchack(numlong,n){
        if(numlong==2+n || numlong == 1+n)
        {
            response[2+n] = '黑'
            lastlist[1] = lastlist[0]
            lastlist[0] = 0
        }
        else if(numlong==3+n)
            response[2+n] = '棕'
        else if(numlong==4+n)
            response[2+n] = '紅'
        else if(numlong==5+n)
            response[2+n] = '橙'
        else if(numlong==6+n)
            response[2+n] = '黃'
        else if(numlong==7+n)
            response[2+n] = '綠'
        else if(numlong==8+n)
            response[2+n] = '藍'
        else if(numlong==9+n)
            response[2+n] = '紫'
        else if(numlong==10+n)
            response[2+n] = '灰'
        else if(numlong==11+n)
            response[2+n] = '白'
        for(i=0;i<numlong;i++)
        {
            if(numstring[i] == '.')
                if(numlong==3)
                {
                    response[2+n] = '金'
                    lastlist[1] = lastlist[2]
                }
                else
                {
                    response[2+n] = '銀'
                    lastlist[0] = lastlist[2]
                    lastlist[1] = lastlist[3]
                }
    
        }
    }

    function lastchack(dm,n){
        if(dm==1)
        response[n] = '棕'
        else if(dm==2)
            response[n] = '紅'
        else if(dm==50)
            response[n] = '綠'
        else if(dm==250)
            response[n] = '藍'
        else if(dm==100)
            response[n] = '紫'
        else if(dm==500)
            response[n] = '灰'
        else if(dm==5)
            response[n] = '金'
        else if(dm==10)
            response[n] = '銀'
        else
            response[n] = ''
    }
    
    if(numlong>11)
    {
        msg = '你確定你資料沒有輸入錯誤?(數字似乎太大了哦)'
    }
    else
    {
        lastlist = numlist
        longchack(numlong,0)
        lastchack(dm,3)
    
        for(i=0;i<2;i++)
        {
            chack(lastlist[i],i)
        }
        msg = `四環色碼電阻:${response[0]},${response[1]},${response[2]},${response[3]}`
    }

    await interaction.deferReply()
    await interaction.editReply(msg)

}