var fs = require('fs')

function readJson(path) {
    let jsonFile = fs.readFileSync(path, 'utf8')
    return JSON.parse(jsonFile)
}

module.exports.readJson = readJson