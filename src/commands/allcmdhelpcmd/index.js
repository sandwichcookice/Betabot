import { SlashCommandBuilder,EmbedBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('help')
    .setDescription('可以幫您了解目前所有的指令以及其用途')

    .addStringOption(Option =>
        Option.setName('指令')
            .setDescription('選擇你想詢問的斜線指令')
            .setRequired(true)
			.addChoices(
				{ name: '台灣時間', value: 'slhtime' },
				{ name: '歌曲推薦', value: 'slhsongrecommend' },
                { name: '歌曲', value: 'slhsong' },
				{ name: '邀請連結', value: 'slhinvitelink' },
                { name: 'math數學運算(加減乘除)', value: 'slhmath' },
                { name: 'ramdom', value: 'slhramdom' },
                { name: '加入語音', value: 'slhjoinvoice' },
                { name: '離開頻道', value: 'slhleftvoice' },
                { name: '播放歌曲', value: 'slhplaysong' },
                { name: '行事曆', value: 'slhcalendar' },
                { name: '課表', value: 'slhclass' },
                { name: '假期倒數', value: 'slhholiday' },
                { name: '功課', value: 'slhhomework' },
                
            )
    )

export const action = async (interaction) => {

    const string = interaction.options.getString('指令');
    let embedhelp;

    if (string == 'slhtime')
    {
        embedhelp = new EmbedBuilder()
        .setTitle(`指令: 台灣時間`)
        .setDescription('可以獲取台灣現在的時間')
        .setColor(0x3498db);
    }
    else if (string == 'slhsongrecommend')
    {
        embedhelp = new EmbedBuilder()
        .setTitle(`指令: 歌曲推薦`)
        .setDescription('可以推薦給小惡魔歌曲的指令')
        .setColor(0x3498db);
    }
    else if (string == 'slhsong')
    {
        embedhelp = new EmbedBuilder()
        .setTitle(`指令: 歌曲`)
        .setDescription('可以叫小惡魔推薦歌曲的指令')
        .setColor(0x3498db);
    }
    else if (string == 'slhinvitelink')
    {
        embedhelp = new EmbedBuilder()
        .setTitle(`指令: 邀請連結`)
        .setDescription('一個可以邀請小惡魔的連結(目前不開放)')
        .setColor(0x3498db);
    }
    else if (string == 'slhmath')
    {
        embedhelp = new EmbedBuilder()
        .setTitle(`指令: math數學運算(加減乘除)`)
        .setDescription('可以運行基本算數的指令')
        .setColor(0x3498db);
    }
    else if (string == 'slhramdom')
    {
        embedhelp = new EmbedBuilder()
        .setTitle(`指令: ramdom`)
        .setDescription('可以取亂數的指令')
        .setColor(0x3498db);
    }
    else if (string == 'slhrjoinvoice')
    {
        embedhelp = new EmbedBuilder()
        .setTitle(`指令: 加入語音`)
        .setDescription('讓小惡魔可以加入語音')
        .setColor(0x3498db);
    }
    else if (string == 'slhrleftvoice')
    {
        embedhelp = new EmbedBuilder()
        .setTitle(`指令: 離開頻道`)
        .setDescription('讓小惡魔退出語音')
        .setColor(0x3498db);
    }
    else if (string == 'slhplaysong')
    {
        embedhelp = new EmbedBuilder()
        .setTitle(`指令: 撥放歌曲`)
        .setDescription('目前測試中(我爸爸在努力了QQ)')
        .setColor(0x3498db);
    }
    else if (string == 'slhcalendar')
    {
        embedhelp = new EmbedBuilder()
        .setTitle(`指令: 行事曆`)
        .setDescription('目前測試中(我爸爸在努力了QQ)')
        .setColor(0x3498db);
    }
    else if (string == 'slhclass')
    {
        embedhelp = new EmbedBuilder()
        .setTitle(`指令: 課表`)
        .setDescription('可以獲取特定天數的課表(如果有選擇)，如果無選擇，就會直接提供當天的課表')
        .setColor(0x3498db);
    }
    else if (string == 'slhholiday')
    {
        embedhelp = new EmbedBuilder()
        .setTitle(`指令: 假期倒數`)
        .setDescription('距離長假還剩多少天')
        .setColor(0x3498db);
    }
    else if (string == 'slhhomework')
    {
        embedhelp = new EmbedBuilder()
        .setTitle(`指令: 功課`)
        .setDescription('可以把要完成的功課加入進去')
        .setColor(0x3498db);
    }

    await interaction.deferReply({ ephemeral: true });
    await interaction.editReply({embeds: [embedhelp]});
}