const   express = require('express'),
        router = express.Router(),
        todolist = require("../models/todo")

        router.delete("/todo/:id", (req,res) => {
            todolist.findOneAndRemove({ _id: req.params.id }).then((removedtodo) => {
                res.json({message: "Todo Removed"})
                console.log(removedtodo)
            })
        })

module.exports = router