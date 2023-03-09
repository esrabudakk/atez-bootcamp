var AdmZip = require("adm-zip");
var fs = require('fs');
function readFiles(fileName) {
    if (!fs.existsSync(fileName)) {
        console.error('File does not exist');
    }
    else {
        return fs.readFileSync(fileName, 'utf-8');
    }
}
function addFileToZip(zip, fileName, content) {
    zip.addFile(fileName, Buffer.from(content, "utf8"));
}
function createZip() {
    var zip = new AdmZip();
    var content1 = readFiles("test1.txt");
    var content2 = readFiles("test2.txt");
    addFileToZip(zip, 'test1.txt', content1);
    addFileToZip(zip, 'test2.txt', content2);
    zip.writeZip("test.zip");
}
// // creating archives
// var zip = new AdmZip();
//
// // add file directly
// var content = "inner content of the file";
// zip.addFile("test1.txt", Buffer.from(content, "utf8"), "entry comment goes here");
// // or write everything to disk
// zip.writeZip("./files.zip");
//
// // ... more examples in the wiki
createZip();
