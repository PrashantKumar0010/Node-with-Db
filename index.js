const db = require('./dataBase/connection.js')
const express = require('express')
const app = express()
require('dotenv').config()
let bodyParser = require('body-parser')
app.use(bodyParser.json())
const PersoN = require('./routes/index.js')
app.use('/person', PersoN)

// ------------------------------------------------------->

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('server is running: ')
})