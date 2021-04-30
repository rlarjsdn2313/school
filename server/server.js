// Use express module
const express = require('express')
const app = express()

// Import routes
const check = require('./routes/check')
const read = require('./routes/read')
const write = require('./routes/write')

// Set port as 4000(You may change, except 3000, it's for react)
const port = 4000

// Set routes
app.use('/check', check)
app.use('/read', read)
app.use('/write', write)

app.get('/', function(req, res) {
})

// Listening part
app.listen(port, function() {
    console.log(`Server is running...(port:${port})`)
})