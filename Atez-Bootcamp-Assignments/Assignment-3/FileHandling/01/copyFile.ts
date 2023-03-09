const fs = require('fs');

function copyFile(src:string ,dst:string){

    fs.copyFile(src, dst, (err) => {
        if (err)
            console.error("Error: File does not exist.")
        else
            console.log('Copied writeFile.txt to copyFile.txt');
    });
}

let fileName = "dst.txt";
copyFile("src.txt",`./dst/${fileName}`)
