const mongoose = require('mongoose')
mongoose.Promise = global.Promise
require('dotenv').config()

module.exports = mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.BD_PASSWORD}@todo-d71w4.mongodb.net/test?retryWrites=true&w=majority`, 
    {useNewUrlParser: true},
    (err)=>{
        if(err){
            console.log(err)
        }else {
            console.log("Connected in Db sucessful!")
        }
})