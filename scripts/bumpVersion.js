const arg = process.argv[2]
const fs = require('fs')

fs.readFile(arg, 'utf8', function (err, data) {
    if (err) {
        return console.error("Error reading file")
    }
    const regex = new RegExp('(version: )(([0-9]+\.){1,})([0-9]+)')
    let match = data.match(regex)
    let text = match[1] + match[2] + (parseInt(match[4]) + 1)
    var res = data.replace(regex, text)
    fs.writeFileSync(arg, res,{encoding:'utf8',flag:'w'})
})
