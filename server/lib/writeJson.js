var fs = require('fs')


var checkFile = require('./checkFile').checkFile
var getTime = require('./getTime').getTime

function getNum() {
    let i = 1
    while (checkFile(i) === true) {
        i++
    }
    return i
}

function writeJson(no, article) {
    if (no === 0) {
        let result = {
            "no" : getNum(),
            "date" : getTime(),
            "article" : article
        }

        fs.writeFile(`./data/${getNum()}.json`, result, 'utf8', function(err) {})

    } else {
        if (checkFile(no) === false) {
            return
        } else {

            let result = {
                "no" : no,
                "date" : getTime(),
                "article" : article
            }
            fs.writeFile(`./data/${no}.json`, result, 'utf8', function(err) {})
        }
    }

    return
}

module.exports.writeJson = writeJson