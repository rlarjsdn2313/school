// Import readJson module
var readJson = require('./readJson').readJson

// Path of key.json
var KEYPATH = './key.json'



function checkKey(mode, input) {
    key = readJson(KEYPATH)
    check = false

    if (mode === 'default') {
        if (key.default === input) {
            check = true
        }
    } else if (mode === 'admin') {
        if (key.admin === input) {
            check = true
        }
    }

    return check
}

module.exports.checkKey = checkKey