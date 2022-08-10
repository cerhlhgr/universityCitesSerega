const express = require('express');
const BotController = require("../controllers /bot.controller");
const router = express.Router();


router.post('/bot_serega', BotController.get);
router.get('/test/:id', (req,res) => {
    res.send(req.params);
});


module.exports = router;
