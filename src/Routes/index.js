const CreateBot = require("../Utils/Bot");

bot = new CreateBot().bot

bot.start(ctx => {
    ctx.reply(`Hello ${ctx.from.first_name}, welcome to the MondaySailersBot.`)
    ctx.reply('This bot will send specific videos every day during the week')

    
})

bot.launch()