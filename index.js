const Telegraf = require('telegraf');
const TG_TOKEN = require('./config').TG_TOKEN;

const app = new Telegraf(TG_TOKEN);

app.command('start', ctx => {
  console.log('start', ctx.from);
  ctx.reply('Welcome!');
});
app.hears('hi', ctx => ctx.reply('Hey there!'));
app.on('sticker', ctx => ctx.reply('👍'));
app.startPolling();