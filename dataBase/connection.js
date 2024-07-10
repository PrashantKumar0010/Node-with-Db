const mongoose = require('mongoose')
require('dotenv').config()
const URL = process.env.DB_URL
mongoose.connect(URL).then((data) => {
    console.log("connected successfully:")
}).catch((err) => {
    console.log('something is wrong: ')
    throw err
})
const Db = mongoose.connection
 Db.on('connected', ()=> {
    console.log("we have successfully connected with mongoDbms Server")
})
 Db.on('disconnected', ()=> {
    console.log("Now we have  Disconnected with mongoDbms Server")
})
 Db.on('error', (err)=> {
    console.log("something is wrong to connect with mongoDbms Server", err)
})

module.exports = Db;