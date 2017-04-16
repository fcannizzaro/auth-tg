# auth-tg
Simple Auth Middleware ([node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api))

[![npm](https://img.shields.io/npm/v/auth-tg.svg)](https://www.npmjs.com/package/auth-tg)
[![npm](https://img.shields.io/npm/dm/auth-tg.svg)](https://www.npmjs.com/package/auth-tg)

# Install

```sh
npm i --save auth-tg
```

# Usage
```javascript
var TelegramBot = require('node-telegram-bot-api');
var auth = require('auth-tg');

// telegram bot
var bot = new TelegramBot(token);

// secure bot
var secure = auth.wrap(bot, [/* array of id */]);
```

# Functions

### wrap(bot, authorized)

- bot: node-telegram-bot-api bot.
- authorized: array of authorized id.

**Return** wrapped bot.

# Secure Functions

### [onText](https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md#TelegramBot+onText)

# Secure Events
Subset of [events](https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#events)

- `auth@message`
- `auth@text`
- `auth@audio`
- `auth@document`,
- `auth@photo`
- `auth@sticker`
- `auth@video`
- `auth@voice`
- `auth@contact`
- `auth@location`
- `auth@callback_query`
- `auth@inline_query`
- `auth@chosen_inline_result`
- `auth@edited_message`

# Author
Francesco Cannizzaro
