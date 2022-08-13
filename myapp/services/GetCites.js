const axios = require("axios");

class GetCites{
    async getCities(body){
        const getCities = await axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=json")
        return getCities.data;
    }
}

module.exports = new GetCites();