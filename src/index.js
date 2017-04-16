var clone = require('clone');

exports.wrap = (bot, authorized) => {

  if (!bot) {
    console.log('[Telegram Bot Middleware] bot is required.')
    return;
  }

  var secure = clone(bot, {
    includeNonEnumerable: true
  });

  secure.onText = (regx, cb) =>
    bot.onText(regx, (msg, match) => {
      if ((authorized || []).indexOf(msg.chat.id) > -1) {
        cb.apply(null, [msg, match]);
      }
    });

  return secure;

}
