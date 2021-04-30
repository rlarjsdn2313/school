var express = require('express')
var router = express.Router()

// Import checkKey and writeJson modules
var checkKey = require('../lib/checkKey').checkKey
var writeJson = require('../lib/writeJson').writeJson

router.get('/:no/:article/:input', function(req, res) {
    try {
        let no = req.params.no
        let article = req.params.article
        let input = req.params.input
    
        // Check key
        if (checkKey('admin', input) === true) {
            // Write file
            if (writeJson(no, article) === -1) {
                res.send({"success" : false})
            }
            // Send key
            res.send({"success" : true})
        } else {
            res.send({"success" : false})
        }
        
    } catch {
        res.send({"success" : false})
    }



})

module.exports = router