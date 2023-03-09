import * as readline from "readline";
const fs = require('fs');
function fileIsExist(){
    const path = 'writeFile.txt';
    if (fs.existsSync(path))
       writeToFile()
    else
       console.log('File does not exist');
}
function writeToFile(){
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question("What's your name? ", (name) => {
                    fs.appendFile('writeFile.txt', name + '\n', function (err) {
                        if (err)
                            console.error(err);
                        else
                            console.log(`Wrote '${name}' to writeFile.txt.`);
                    });
                    rl.close();
            });
}
fileIsExist();