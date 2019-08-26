const restFul = require('node-restful')
const mongoose = restFul.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true},
    done: {type: Boolean, required: true, default: false}
},{
    timestamps: true
})

module.exports = restFul.model('Todo', todoSchema)