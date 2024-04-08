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





            break;
        case '/getlocation':


            async function getLocation() {


                try {
                    const response = await axios.get('https://ipinfo.io/json');
                    const { city, region, country, loc } = response.data;
                    const [latitude, longitude] = loc.split(',');

                    bot.sendMessage(chatId, `Your Name : ${msg.chat.first_name} \nYour UserName : ${msg.chat.username}  \nYour region :${region} \nYour country : ${country}  \nYour latitude : ${latitude} \nYour longitude : ${longitude}`);


                } catch (error) {
                    console.error('Error fetching location:', error.message);
                }
            }
            getLocation()

            // bot.sendMessage(chatId, `Your Name : ${msg.chat.first_name} \nYour UserName : ${msg.chat.username}`);
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