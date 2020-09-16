var mongoose = require('mongoose')

var todoSchema = new mongoose.Schema({
    todo: {type:String, required: true, unique: true}
}) 

module.exports = mongoose.model("todolist", todoSchema)


