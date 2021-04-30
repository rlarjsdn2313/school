var express = require('express')
var router = express.Router()
var checkKey = require('../lib/checkKey').checkKey
var writeJson = require('../lib/writeJson').writeJson

router.get('/:no/:article/:input', function(req, res) {
    let no = req.params.no
    let article = req.params.article
    let input = req.params.input

    if (checkKey('default', input) === true || checkKey('admin', input) === true) {
        writeJson(no, article)
    }
})

module.exports = router