const express = require('express');
const app = express();
const dotenv = require('dotenv') // it takes the path
const bodyParser = require("body-parser");



dotenv.config({path: './.env'})
const port = process.env.PORT || 5399;
require('./db/connection')

// to understand the json request
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// get all routes from the routes folder and the its file
app.use(require('./routes/routes'))

//middleware
const middleware = (req,res,next) => {
    console.log("hello from middleware");
    next(); // show the significance of this if ....
}

app.get('/get' ,(req,res) => { // same is present in the route file so let see which routes is called.
    console.log('>serverWithDatabase | [app.js] > #28 | check : ');
    res.send("hello world from the server")
})

app.get('/check', middleware ,(req,res) => {
    console.log("in the api========")
    res.send("hello world from the server with validation")
})

app.listen(port, () => {
    console.log("server is running on port :", port  )
})






