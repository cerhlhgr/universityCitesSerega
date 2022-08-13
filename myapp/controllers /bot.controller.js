const GetCitiesService = require('../services/GetCites')
const process = require('process');
const Messages = require('../services/Messages')
class BotController{

    async get(req, res, next) {
        try{
            if(req.body.type === 'message_new')
            {
                //if(req.body.object.message.text === "Города") {
                {    const reqBody = {
                        q: req.body.object.message.text,
                        need_all: 1,
                        country_id:1,
                        access_token: process.env.token_user,
                        v: "5.131"
                    }
                    const cities = await GetCitiesService.getCities(reqBody);
                    const messageBody =  {
                        access_token: process.env.token_user,
                        user_id: req.body.object.message.peer_id,
                        random_id:Math.random(),
                        message: "cit",
                        v: "5.131"
                    }
                    const resSend = await Messages.sendMessage(messageBody);
                }
            }
            res.send("4dfee1ce");
                } catch (err){
            next(err)
        }

    }
}

module.exports = new BotController()