const   express = require('express'),
        router = express.Router(),
        todolist = require("../models/todo")

router.get("/", (req,res) => {
    todolist.find((err,todolist)=>{
        if (err){
            console.log(err)
            res.json(err)
        }
        console.log(todolist)
        res.json(todolist)
    })
})

module.exports = router