var express = require('express')
var router = express.Router();
var checkKey = require('../lib/checkKey').checkKey

// Checking password
router.get('/:mode/:input', function(req, res) {
    let mode = req.params.mode
    let input = req.params.input

    res.send({
        "check" : checkKey(mode, input)
    })
})

module.exports = router