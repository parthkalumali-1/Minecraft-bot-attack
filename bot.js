const mineflayer = require('mineflayer');

function createBot(username) {
  const bot = mineflayer.createBot({
    host: 'play.peacesmp.fun', // replace with your IP
    port: 25565,
    username: username,
    version: false // auto-detect version
  });

  bot.on('spawn', () => {
    console.log(`${username} has joined.`);
  });

  bot.on('end', () => {
    console.log(`${username} disconnected.`);
  });

  bot.on('error', err => {
    console.log(`Error with ${username}:`, err);
  });
}

// Launch 50 bots
for (let i = 1; i <= 50; i++) {
  createBot('Bot_' + i);
}
