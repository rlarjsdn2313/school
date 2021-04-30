var fs = require('fs')

var KEYPATH = './key.json'

function readKey() {
    let keyFile = fs.readFileSync(KEYPATH, 'utf8')
    return JSON.parse(keyFile)
}

function checkKey(mode, input) {
    key = readKey()
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