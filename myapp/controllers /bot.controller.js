const GetCitiesService = require('../services/GetCites')
const process = require('process');
const Messages = require('../services/Messages')
class BotController{

    async get(req, res, next) {
        try{

            if(req.body.type === 'message_new')
            {
                    const reqBody = {
                        q: req.body.object.message.text,
                        need_all: 1,
                        country_id:1,
                        access_token: process.env.token_user,
                        count:10,
                        v: "5.131"
                    }
                    const cities = await GetCitiesService.getCities(reqBody);
                    const messageBody =  {
                        access_token: process.env.access_token,
                        user_id: req.body.object.message.from_id,
                        peer_id: req.body.object.message.peer_id,
                        message: cities.insult,
                        v: "5.131"
                    }
                    await Messages.sendMessage(messageBody);
                    res.send("ok");
                    return;
                }
                res.send("4dfee1ce");

             } catch (err){
            next(err)
        }

    }
}

module.exports = new BotController()