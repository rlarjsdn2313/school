var fs = require('fs')
var path = require('path')

var checkFile = require('./checkFile').checkFile

var DATAPATH = './data/'

function deleteJson(no) {
    if (checkFile(DATAPATH, no) == false) {
        return -1
    }

    // Get files list
    let files = fs.readdirSync(DATAPATH)
    
    // Filter file name
    var i = 0
    while (i < files.length) {
        files[i] = path.parse(files[i]).name
        i = i + 1
    }

    // Sort files list
    files.sort()

    // Delete File
    fs.unlinkSync(`${DATAPATH}${no}.json`)

    // Should be changed files
    let CFiles = files.slice(no)

    var i = 0
    while (i < CFiles.length) {
        fs.renameSync(`${DATAPATH}${CFiles[i]}.json`, `${DATAPATH}${CFiles[i]-1}.json`)
        i = i + 1
    }

}
module.exports.deleteJson = deleteJson