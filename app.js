const mineflayer = require('mineflayer');
const config = require('./config.json');
const bot = mineflayer.createBot({
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password
});

bot.on('connect', function() {
    console.info('Successfully connected to ' + config.host + ':' + config.port);    
});
