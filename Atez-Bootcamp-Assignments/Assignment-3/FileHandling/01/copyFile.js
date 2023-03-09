var fs = require('fs');
function copyFile(src, dst) {
    fs.copyFile(src, dst, function (err) {
        if (err)
            console.error("Error: File does not exist.");
        else
            console.log('Copied writeFile.txt to copyFile.txt');
    });
}
var fileName = "dst.txt";
copyFile("src.txt", "./dst/".concat(fileName));
