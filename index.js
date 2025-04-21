const http = require('http');
const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  function blockCpu(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {}
  }
    blockCpu(100);
    res.end('Hello, CPU is loaded');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://${host}:${port}`);
});