// Use express module
const express = require('express')
const app = express()

const check = require('./routes/check')


// Set port as 4000(You may change, except 3000, it's for react)
const port = 4000

app.use('/check', check);

app.get('/', function(req, res) {
})

// Listening part
app.listen(port, function() {
    console.log(`Server is running...(port:${port})`)
})