const   express = require('express'),
        bodyParser = require('body-parser'),
        methodOverride = require('method-override'),
        mongoose = require('mongoose'),
        listalltodo = require("./routes/listalltodo"),
        createtodo = require("./routes/createtodo"),
        deletetodo = require("./routes/deletetodo"),
        updatetodo = require("./routes/updatetodo"),
        app = express()
        

// middlewares
app.use(bodyParser.json())      
app.use(methodOverride("_method"))          
app.use("/",listalltodo);
app.use("/",deletetodo);
app.use("/",createtodo);
app.use("/",updatetodo);

// Database Connection and Port declaration
mongoose.connect("mongodb+srv://aayush:aayush@todolistapi.wsupw.mongodb.net/todoListAPI?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})
.then(
    app.listen(3000, ()=>{
    console.log("server started")
    })
)
 

