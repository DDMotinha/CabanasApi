const express = require('express')
const app = express()
const { userEnterInstagram } = require('./src/data/instagramApi.js')

app.get('/', async (req, res, next) =>{
    await userEnterInstagram()
})

app.listen(process.env.SERVER_PORT, () =>{
    console.log('App is still running!')
})