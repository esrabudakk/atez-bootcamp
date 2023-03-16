const fs = require('fs');
const path = require('path');

// console.log('path', path)

fs.exists('newFile.txt', function (exists) {
  console.log(exists ? 'Buldum': 'Bulamadım')
  if(exists){
    fs.readFile('newFile.txt','utf8', function (err, data) {
      console.log('data',err, data)})
  }
  else {
    throw Error('Dosya bulunamadı')
  }
})
