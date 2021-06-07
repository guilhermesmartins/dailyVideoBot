require('dotenv').config()
const { Telegraf } = require('telegraf')

class CreateBot {
    bot;

    constructor() {
        this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)
    }
}

module.exports = CreateBot