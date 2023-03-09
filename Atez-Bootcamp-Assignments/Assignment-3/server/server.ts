// const http = require('http');
// const url = require('url');
// const fs = require('fs');
//
// http.createServer((req, res) => {
//     const pathQuery = url.parse(req.url, true);
//     const fileName = `./pages/${pathQuery.pathname}`;
//     fs.readFile(fileName, (err, data) => {
//         if(err){
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.end('Page could not be found!');
//         }
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end()
//     })
// }).listen(3000)


const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    const url = req.url;
    // const parse = path.parse(url)
    // console.log(parse)

    const ext = path.extname(url);
    const name = path.basename(url, ext)
    if (name === 'index' && ext === '.html') {
        fs.readFile('./pages/index.html', (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('404 Not Found\n');
                res.end();
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (ext === '.css' && name === 'style'){
        fs.readFile('./pages/style.css', (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('404 Not Found\n');
                res.end();
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    } else if (ext === '.js' && name === 'script'){
        fs.readFile('./pages/script.js', (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('404 Not Found\n');
                res.end();
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    }
}).listen(4242)
