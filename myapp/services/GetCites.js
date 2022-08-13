const axios = require("axios");

class GetCites{
    async getCities(body){
        const getCities = await axios.get("https://api.vk.com/method/database.getCities", {params: body})
        return getCities.data;
    }
}

module.exports = new GetCites();