var clone = require('clone');

var events = [
  'message', 'text', 'audio', 'document', 'photo', 'sticker',
  'video', 'voice', 'contact', 'location', 'callback_query',
  'inline_query', 'chosen_inline_result', 'edited_message'
];

exports.wrap = (bot, authorized) => {

  if (!bot) {
    console.log('[Telegram Bot Middleware] bot is required.')
    return;
  }

  authorized = authorized || [];

  var secure = clone(bot, {
    includeNonEnumerable: true
  });

  secure.onText = (regx, cb) =>
    bot.onText(regx, (msg, match) =>
      authorized.indexOf(msg.chat.id) > -1 && cb.apply(null, [msg, match])
    );

  events.forEach(event =>
    bot.on(event, (msg) => {
      var chat = msg.chat || msg.message.chat;
      authorized.indexOf(chat.id) > -1 && secure.emit('auth@' + event, msg);
    })
  );

  return secure;

}
