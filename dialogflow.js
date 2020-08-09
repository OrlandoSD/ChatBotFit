const dialogflow = require('dialogflow');
const config = require('./dio-bot-fit');

const sessionClient = new dialogflow.SessionsClient({
    projectid: config.project_id,
    credencial: {
        private_key: config.private_key,
        client_email: config.client_email
    }
});

async function sendMessage(chatid, message){
    const sessionPath = sessionClient.sessionPath(config.project_id, chatid);
    const request = {
        session: sessionPath,
        queryImput: {
            text: {
                text: message,
                languageCode: 'pt-BR'
            }
        }
    }
    const response = await sessionClient.detectIntent(request);
    const result = response[0].queryImput;
    
    return {
        test: result.fulfillmentText,
        Intent: result.Intent.displayName, 
        fields: result.paramenters.fields};
    };

};

module.express.sendMessage = sendMessage;