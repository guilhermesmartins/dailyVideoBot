const Telegraf = require('telegraf')
const cron = require('node-cron')

/*
Here comes the key for the bot @DailyVideo_bot, created for the publishing of this code on GitHub
The original is the @MondaySailers_bot
*/
const bot = new Telegraf('1235008486:AAH6v1YQ8GLvzJxAMKrdNSvMIUOD9wEEnn8')

bot.start((ctx) => {
    ctx.reply(`Hello ${ctx.from.first_name}, welcome to the MondaySailersBot.`)

    bot.telegram.sendAnimation(ctx.chat.id, 'https://media.giphy.com/media/dvrpckfDE3Vq8vbmlN/giphy.gif')
    
    cron.schedule('0 0 * * 1', function() {
        ctx.replyWithVideo({ source: './vids/monday.mp4', reply_to_message_id: ctx.message.message_id})

        sendVideoStatus(ctx)
    })

    cron.schedule('0 0 * * 3', function() {
        ctx.replyWithVideo({ source: './vids/wednesday.mp4', reply_to_message_id: ctx.message.message_id})

        sendVideoStatus(ctx)
    })

    cron.schedule('0 18 * * 5', function() {
        ctx.replyWithVideo({ source: './vids/friday_yakuza.mp4', reply_to_message_id: ctx.message.message_id })

        sendVideoStatus(ctx)
    })
})

bot.command(['Monday', 'monday'], (ctx) => {
    ctx.replyWithVideo({ source: './vids/monday.mp4'})

    sendVideoStatus(ctx)
})

bot.command(['wednesday', 'Wednesday'], (ctx) => {
    ctx.replyWithVideo({ source: './vids/wednesday.mp4'})

    sendVideoStatus(ctx)
})

bot.command(['friday', 'Friday'], (ctx) => {
    ctx.replyWithVideo({ source: './vids/friday_yakuza.mp4'})

    sendVideoStatus(ctx)
})

bot.command('about', ctx => {
    ctx.reply('This bot was made by Guilherme (https://github.com/guilhermeSMartins) and possible by the twitter pages @RiseMonday, @corndogninja and @WednesdayOr')
})

bot.command('help', ctx => {
    ctx.reply(`
    /start - initiates the bot that will send one video on monday, one on wednesday and one on friday at 18 PM
    /monday - see the video that will be send on monday
    /wednesday - see the video that will be send on wednesday
    /friday - see the video that will be send on friday
    /about - about the creation of this bot`)
})

const sendVideoStatus = (ctx) => {
    return bot.telegram.sendChatAction(ctx.chat.id, 'upload_video')
}


bot.launch()