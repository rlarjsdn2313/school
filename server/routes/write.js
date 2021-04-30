var express = require('express')
var router = express.Router()
var checkKey = require('../lib/checkKey').checkKey
var writeJson = require('../lib/writeJson').writeJson

router.get('/:no/:article/:input', function(req, res) {
    try {
        let no = req.params.no
        let article = req.params.article
        let input = req.params.input
    
        if (checkKey('admin', input) === true) {
            writeJson(no, article)
            res.send({"success" : true})
        } else {
            res.send({"success" : false})
        }
        
    } catch {
        res.send({"success" : false})
    }



})

module.exports = router