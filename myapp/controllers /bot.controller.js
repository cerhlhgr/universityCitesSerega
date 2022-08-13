class BotController{

    async get(req, res, next) {
        try{
             res.send("86399b3a");
        } catch (err){
            next(err)
        }

    }
}

module.exports = new BotController()