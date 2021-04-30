const express = require('express')
const app = express()

const port = 4000

app.get('/', function(req, res) {
    res.send('Server is running...')
})

app.listen(port, function() {
    console.log(`Server is running...(port:${port})`)
})