// Import router module
var express = require('express')
var router = express.Router()

// Import readJson and checkKey modules
var readJson = require('../lib/readJson').readJson
var checkKey = require('../lib/checkKey').checkKey
var checkFile = require('../lib/checkFile').checkFile

var DATAPATH = './data/'

router.get('/:no/:input', function(req, res) {
    // get params
    let no = req.params.no
    let input = req.params.input

    // Checking...
    if (checkFile(DATAPATH, no) && (checkKey('default', input) === true || checkKey('admin', input) === true)) {
        res.send(readJson(`${DATAPATH}${no}.json`))
    } else {
        res.send({
            "no" : undefined,
            "date" : undefined,
            "article" : undefined
            })
    }
})

module.exports = router