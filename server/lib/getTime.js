function getTime() {
    let now = new Date()
    return [now.getFullYear(), now.getMonth(), now.getDate()]
}

module.exports.getTime = getTime