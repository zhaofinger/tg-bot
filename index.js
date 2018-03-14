const Telegraf = require('telegraf');
const Telegram = require('telegraf/telegram');
const schedule = require('node-schedule');

const { TG_TOKEN, SCHEDULE_LIST, CHATID } = require('./config');              // tg token

const app = new Telegraf(TG_TOKEN);
const telegram = new Telegram(TG_TOKEN);

// 定时任务
const scheduleDict = {};
SCHEDULE_LIST.forEach((item, index) => {
  let timeArr = item.time.split(':');
  scheduleDict['schedule' + index] = schedule.scheduleJob(`0 ${parseInt(timeArr[1], 10)} ${parseInt(timeArr[0], 10)} * * *`, () => {
    telegram.sendMessage(CHATID, `现在时间是 ${new Date()} \n${item.message}`);
  });
});


app.command('start', ctx => {
  ctx.reply('Welcome!');
});

// get chat id
app.command('my_id', ctx => {
  ctx.reply(`${ctx.from.username} chatId is ${ctx.from.id}`);
});

app.startPolling();