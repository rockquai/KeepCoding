const http = require('http');
const fs = require('fs');
const url = require('url');
const request = require('request');

request.get('http://www.naver.com', (error, response, body) => {
    fs.writeFile('views/naver.html', body, (error, data) => {
        console.log(error);
    });
});

request.get('http://www.daum.net', (error, response, body) => {
    fs.writeFile('views/daum.net', body, (error, data) => {
        console.log(error);
    });
});

http.createServer( (request, response) => {
    const pathname = url.parse(request.url).pathname;
    if (pathname === '/') {
        fs.readFile('index.html', (error, data) => {
            response.end(data);
        });
    } else if (pathname === '/naver.html') {
        fs.readFile('views/naver.html', (error, data) => {
            response.end(data);
        });
    } else if (pathname === '/daum.net') {
        fs.readFile('views/daum.net', (error, data) => {
            response.end(data);
        });
    }
}).listen('8080', () => {
    console.log('server on!!!');
});
