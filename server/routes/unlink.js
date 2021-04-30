var express = require('express')
var router = express.Router()

// Import checkKey and writeJson modules
var checkKey = require('../lib/checkKey').checkKey
var deleteJson = require('../lib/deleteJson').deleteJson

router.get('/:no/:input', function(req, res) {
    let no = req.params.no
    let input = req.params.input

    if (checkKey('admin', input) == false) {
        res.send({"success" : false})
    } else {
        deleteJson(no)
        res.send({"success" : true})
    }
})

module.exports = router