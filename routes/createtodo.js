const   express = require('express'),
        router = express.Router(),
        todolist = require("../models/todo")


router.post("/createtodo", (req, res) => {
    const TODO = req.body.todo
    todolist.create({
        todo: TODO
    }, (err, todolist) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(todolist)
            res.json(todolist)
        }
    })
})

module.exports = router