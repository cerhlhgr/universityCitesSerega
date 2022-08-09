class BotController{

    async get(req, res, next) {
        try{
            res.send(req.body);
        } catch (err){
            next(err)
        }

    }
}

module.exports = new BotController()