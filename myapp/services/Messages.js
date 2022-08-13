const axios = require("axios");

class Messages{
    async sendMessage(body){
        try{
            const ans = await axios.get('https://api.vk.com/method/messages.send', {params: body})
            return ans;
        }
        catch (err){
            console.log(err)
        }
    }
}

module.exports = new Messages()