const mongoose = require('mongoose')

// add the password after Username and the database name after the mongodb.net
const dataBase = process.env.DATABASE;

mongoose.connect(dataBase, { // basically we add these to avoid the deprication warnings in the server due to db , just to handle it
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection established')
}).catch((error)=> console.log(error))