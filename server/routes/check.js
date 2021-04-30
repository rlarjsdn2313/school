var express = require('express')
var router = express.Router();
var checkKey = require('../lib/checkKey')

// Checking password
router.get('/:mode/:input', function(req, res) {
    let mode = req.params.mode
    let input = req.params.input

    res.send({
        "check" : checkKey.checkKey(mode, input)
    })
})

module.exports = router