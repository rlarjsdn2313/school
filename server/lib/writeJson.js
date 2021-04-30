// Import fs module
var fs = require('fs')

// Import checkFile and getTime modules
var checkFile = require('./checkFile').checkFile
var getTime = require('./getTime').getTime

// Datapath(PLZ someone union this)
var DATAPATH = './data/'

// Get empty no
function getNum() {
    no = 1
    while (checkFile(DATAPATH, no) === true) {
        no = no + 1
    }
    return no
}

function makeResult(no, date, article) {
    
    return`{
    "no" : ${no},
    "date" : [${date[0]}, ${date[1]}, ${date[2]}],
    "article" : "${article}"
}`
}

function writeJson(no, article) {
    let time = getTime()
    if (no == 0) {        
        fs.writeFileSync(`${DATAPATH}${getNum()}.json`, makeResult(getNum(), time, article), 'utf8');
    } else {
        if (checkFile(`${DATAPATH}`, no) === false) {
            return -1
        } else {
            fs.writeFileSync(`${DATAPATH}${no}.json`, makeResult(no, time, article), 'utf8');
        }
    }
}

// Export
module.exports.writeJson = writeJson