const http = require('http');

http.createServer((req, res) => {
  res.end('Hello, World!\n');
}).listen(8080, () => console.log('Listening on 8080'));
