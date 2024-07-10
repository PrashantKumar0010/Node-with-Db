const fs = require('fs')
const MyUrl = require('url')

function GetLogHandler() {
    return (req, res, next) => {
        const path = MyUrl.parse(req.url, true)
        // const searchKey = path.query.mobile
        const searchKey = req.params.mobile
        let d = new Date();
        let NewData = d.toString().slice(0, 24)
        fs.appendFile('log.txt', `ip ${req.ip} date ${NewData} path ${JSON.stringify(path)} searchingKey ${searchKey}\n\n`, (err) => {
            console.log()
        })
        next()
    }
}
module.exports = {
    GetLogHandler,
}