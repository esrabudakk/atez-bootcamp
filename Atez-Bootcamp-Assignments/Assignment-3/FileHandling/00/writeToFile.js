"use strict";
exports.__esModule = true;
var readline = require("readline");
var fs = require('fs');
function fileIsExist() {
    var path = 'writeFile.txt';
    if (fs.existsSync(path)) {
        writeToFile();
    }
    else {
        console.log('File does not exist');
    }
}
function writeToFile() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("What's your name? ", function (name) {
        fs.appendFile('writeFile.txt', name + '\n', function (err) {
            if (err)
                console.error(err);
            else
                console.log("Wrote '".concat(name, "' to writeFile.txt."));
        });
        rl.close();
    });
}
fileIsExist();
