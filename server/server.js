// Use express module
const express = require('express')
const app = express()

// Set port as 4000(You may change, except 3000, it's for react)
const port = 4000

app.get('/', function(req, res) {
    res.send('Server is running...')
})

// Listening part
app.listen(port, function() {
    console.log(`Server is running...(port:${port})`)
})