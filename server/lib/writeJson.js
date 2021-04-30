// Import fs module
var fs = require('fs')

// Import checkFile and getTime modules
var checkFile = require('./checkFile').checkFile
var getTime = require('./getTime').getTime

var DATAPATH = './data/'

function getNum() {
    no = 1
    while (checkFile(DATAPATH, no) === true) {
        no = no + 1
    }
    return no
}

function writeJson(no, article) {
    let time = getTime()
    if (no == 0) {
        
        var result = 
        `
        {
            "no" : ${getNum()},
            "date" : [${time[0]}, ${time[1]}, ${time[2]}],
            "article" : "${article}"
        }
        `

        fs.writeFileSync(`${DATAPATH}${getNum()}.json`, result, 'utf8');
    } else {
        if (checkFile(no) === false) {
            return
        } else {
            var result = 
            `
            {
                "no" : ${getNum()},
                "date" : [${time[0]}, ${time[1]}, ${time[2]}],
                "article" : "${article}"
            }
            `
            fs.writeFileSync(`${DATAPATH}${getNum()}.json`, result, 'utf8');
        }
    }
}

module.exports.writeJson = writeJson