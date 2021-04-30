var fs = require('fs')

function checkFile(path, no) {
    try {
        let files = fs.readdirSync(path)
        return files.includes(`${no}.json`)
    } catch {
        return false
    }
}

module.exports.checkFile = checkFile