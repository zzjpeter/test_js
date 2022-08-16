const http = require('http');
const crypto = require("crypto")

function doTestServer() {
  const hostname = '127.0.0.1';
  const port = 3000;
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

function doBusyTask() {
  let n = 0;
  for (let i = 0; i < 10; i++) {
    const input = crypto.randomBytes(8).toString('hex'); 
    for (let j = 0; j < 200; j++) {
        n += j;    
    }
  }
  console.log("doBusyTask");
}


console.log("doTest");
//doTestServer();
doBusyTask();
