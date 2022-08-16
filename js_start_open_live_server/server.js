const http = require("http");

const server = http.createServer((req,res) => {
   res.end("hello world"); 
});

server.listen(3000,() => {
    console.log("Server is listening on 3000 port");
});