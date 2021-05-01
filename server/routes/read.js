// Import router module
var express = require('express')
var router = express.Router()

var fs = require('fs')
var path = require('path')

// Import readJson and checkKey modules
var readJson = require('../lib/readJson').readJson
var checkKey = require('../lib/checkKey').checkKey
var checkFile = require('../lib/checkFile').checkFile

var DATAPATH = './data/'

router.get('/:no/:input', function(req, res) {
    // get params
    let no = req.params.no
    let input = req.params.input

    let files = fs.readdirSync('./data/')
    
    // Filter file name
    var i = 0
    while (i < files.length) {
        files[i] = path.parse(files[i]).name
        i = i + 1
    }

    // Sort files list
    files.sort()

    // Checking...
    if (checkFile(DATAPATH, no) && (checkKey('default', input) === true || checkKey('admin', input) === true)) {
        res.send(readJson(`${DATAPATH}${no}.json`))
    } else if (no == 0 && (checkKey('default', input) === true || checkKey('admin', input) === true)) {
        res.send(readJson(`${DATAPATH}${files[i-1]}.json`))
    }
        else {
        res.send({
            "no" : undefined,
            "date" : undefined,
            "article" : undefined
            })
    }
})

module.exports = router