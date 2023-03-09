const AdmZip = require("adm-zip");
const fs = require('fs')
function readFiles(fileName:string): string {
   if(!fs.existsSync(fileName))
       console.error('File does not exist');
   else
       return fs.readFileSync(fileName, 'utf-8');
}
function addFileToZip(zip: any, fileName: string, content: string) {
    zip.addFile(fileName, Buffer.from(content, "utf8"));
}
function createZip() {
    const zip = new AdmZip();
    const content1 = readFiles("test1.txt");
    const content2 = readFiles("test2.txt");
    addFileToZip(zip, 'test1.txt', content1);
    addFileToZip(zip, 'test2.txt', content2);
    zip.writeZip("test.zip");
}

createZip()