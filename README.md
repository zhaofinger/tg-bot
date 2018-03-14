# tg-bot

## Usage

1. `yarn` or `npm install --save` install dependencies

1. `cp config.example.js config.js`

1. open telegrame, search 'BotFather' then send '/newbot' create a new bot then get token

1. modify the `config.js` file TG_TOKEN and CHATID

1. `pm2 start index.js --watch`