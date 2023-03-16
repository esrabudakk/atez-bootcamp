const fs = require('fs');
const path = require('path');

const createFolder = (directoryName) => {
    fs.mkdir(path.join(__dirname, directoryName, () => {
        if(err){
            return console.error(err)
        }
        console.log('Klasör oluşturuldu')
    }))
}
createFolder('http')
