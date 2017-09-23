const http = require('http');

http.createServer((req, res) => {
  res.end('<h1>Hello World!</h1>')
}).listen(8080, () => console.log('server on!!'));