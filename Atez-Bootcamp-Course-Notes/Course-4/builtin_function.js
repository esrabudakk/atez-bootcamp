import process from 'process';
import os from 'os';
// const process = require('process');

console.log(process.argv);

//CommonJS
// --> const commonjs = require('commonjs');
//Module Js
//--> import modulejs
// import process from 'process' kullanabilmek için package.json içerisinde type: module yazılmalıdır.
// 2. yöntem olarak doya uzantısı .mjs olmalıdır.

/**********************************************/
// .cjs uzantılı dosyalar commonjs olarak çalışır.
// .ts uzantılı dosyalar typescript olarak çalışır.
// .js uzantılı dosyalar ise javascript olarak çalışır.

console.log(process.env)
// console.log(process.env.NODE_ENV)

const isDev = process.env.NODE_ENV === 'Development';
console.log(isDev ? 'Development' : 'Production');



// Operating System bilgileri --> os
console.log("/*********************** OS **************************/")
console.log(os.hostname())
console.log(os.platform())
console.log(os.arch())
console.log(os.cpus())
