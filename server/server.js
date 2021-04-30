// Use express module
const express = require('express')
const app = express()

// Import cors to prevent error
const cors = require('cors')

// Import routes
const check = require('./routes/check')
const read = require('./routes/read')
const write = require('./routes/write')

// Set port as 4000(You may change, except 3000, it's for react)
const port = 4000

// Use cors
app.use(cors())

// Set routes
app.use('/api/check', check)
app.use('/api/read', read)
app.use('/api/write', write)

app.get('/', function(req, res) {
})

// Listening part
app.listen(port, function() {
    console.log(`Server is running...(port:${port})`)
})