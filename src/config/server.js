const express = require('express')
const bodyParser = require('body-parser')
const allowCors = require('./cors')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(3003, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("This server is running!")
    }
})

module.exports = server