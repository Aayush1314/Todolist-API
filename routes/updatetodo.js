const   express = require('express'),
        router = express.Router(),
        todolist = require("../models/todo")

        router.put("/todo/:id", (req,res) => {
            todolist.findOneAndUpdate(req.params.id, req.body).then((todo) =>{
                res.json({message: "Todo Updated"})
                console.log(todo)
            })
            })
module.exports = router