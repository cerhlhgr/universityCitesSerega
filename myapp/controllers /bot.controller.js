class BotController{

    async get(req, res, next) {
        try{
            res.send({title:"jopa"});
        } catch (err){
            next(err)
        }

    }
}

module.exports = new BotController()