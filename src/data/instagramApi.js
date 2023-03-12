const axios = require('axios')

async function userEnterInstagram(){
    const userEntered = await axios.get(
        `https://graph.facebook.com/v16.0/${process.env.INSTAGRAM_USER}&access_token=${process.env.INSTAGRAM_PASSWORD}`
    )
    console.log(userEntered)
    
}

module.exports = {
    userEnterInstagram
}