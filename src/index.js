var extend = require('util')._extend;

exports.wrap = (bot, authorized) => {

  if (!bot) {
    console.log('[Telegram Bot Middleware] bot is required.')
    return;
  }

  var secure = extend({}, bot);

  secure.onText = (regx, cb) =>
    bot.onText(regx, (msg, match) => {
      if ((authorized || []).indexOf(msg.chat.id) > -1) {
        cb.apply(null, [msg, match]);
      }
    });

  return secure;

}
