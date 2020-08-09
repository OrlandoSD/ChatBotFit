const TelegramBot = require ('node-Telegram-bot.api');
const dialogflow = require('./dialogflow');
const youtube = require('./youtube');

const Token = '937610458:AAFJhcQTtrxIYZVQvMlN9CL9oD4fPk7C-JI';

const bot = new TelegramBot(token,{polling : true});

bot.on('message', function(msg){
    const chatid = msg.chat.chatid;
    console.log(msg.text);
 
    const dfResponse = await dialogflow.sendMessage(chatid.toString(), msg.text);
   
    let responseText = dfResponse.responseText;
    if(dfResponse.intent == 'treino especifico'){
        responseText = await youtube.searchvideoURL(responseText, dfResponse.fields.corpo.stringvalue);
    }
   
    bot.sendMessage(chatid, response.text);
});