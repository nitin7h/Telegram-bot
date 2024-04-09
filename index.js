require('dotenv').config()
const axios = require('axios');

const botToken = process.env.TELEGRAM_BOT_TOKEN


const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(botToken, { polling: true });


// Listen for incoming messages
bot.on('message', (msg) => {

    const chatId = msg.chat.id;

    const command = msg.text.toString().toLowerCase(); // Convert command to lowercase


    switch (command) {
        case '/start':
            bot.sendMessage(chatId, `Welcome ${msg.chat.first_name}`);
            console.log(msg);
            break;

        case '/you':
            bot.sendMessage(chatId, `Your Name : ${msg.chat.first_name} \nYour Username : ${msg.chat.username} \nYour Chat id : ${msg.chat.id} \nLocation : I'm working on it, sorry for the inconvenience`);
            break;
        case '/about':
            bot.sendMessage(chatId, ` I am backend developer. \nI am passionate about creating innovative and user-friendly products that meet the needs of businesses and individuals.`);
            break;
        case '/contact':
            bot.sendMessage(chatId, 'https://t.me/nitin19aug');
            break;
        case '/mail':
            bot.sendMessage(chatId, 'nitinkumar7h@gmail.com');
            break;
        case '/social':
            bot.sendMessage(chatId, `My LinkedIn profile : https://www.linkedin.com/in/nitin7h/ \nFollow me on instagram : https://www.instagram.com/nittiin.kumar?igsh=bjVvem5hd2plYmky `);
            break;



        default:
            bot.sendMessage(chatId, 'Command not matched');
            break;
    }
});