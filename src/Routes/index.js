const cron = require('node-cron')

const CreateBot = require("../Utils/Bot")

const Monday = require('../Modules/Monday')
const Wednesday = require('../Modules/Wednesday')
const Friday = require('../Modules/Friday')
const Saturday = require('../Modules/Saturday')


bot = new CreateBot().bot

bot.start(ctx => {
    ctx.reply(`Hello ${ctx.from.first_name}, welcome to the MondaySailersBot.`)
    ctx.reply('This bot will send specific videos every day during the week')

    
})

bot.launch()