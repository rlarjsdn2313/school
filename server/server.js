// Use express module
const express = require('express')
const app = express()

// Import checkKey module
const checkKey = require('./lib/checkKey')

// Set port as 4000(You may change, except 3000, it's for react)
const port = 4000

// Checking password
app.get('/check/:mode/:input', function(req, res) {
    let mode = req.params.mode
    let input = req.params.input

    res.send({
        "check" : checkKey.checkKey(mode, input)
    })
})

app.get('/', function(req, res) {
})

// Listening part
app.listen(port, function() {
    console.log(`Server is running...(port:${port})`)
})