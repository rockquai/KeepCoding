// ex1.
// const fs = require('fs');
// const request = require('request');
// const http = require('http');
//
// const server = http.createServer( (request, response) => {
//     console.log(request);
//     fs.readFile( 'naver.html', 'utf-8', (error, data) => {
//         response.end(data);
//     });
// });
//
// server.listen('8080', () => {
//     console.log('server on!');
// });


// ex2.
const http = require('http');
const fs = require('fs');

const server = http.createServer( (request, response) => {
        response.end('<h1>' + request.url + '</h1>');
});

server.listen('8080', () => {
    console.log('server on!');
});

