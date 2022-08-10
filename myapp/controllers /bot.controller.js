class BotController{

    async get(req, res, next) {
        try{
            res.send("1fa6d808");
        } catch (err){
            next(err)
        }

    }
}

module.exports = new BotController()