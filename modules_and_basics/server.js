var http = require('http');
var fs = require('fs');

http.createServer(onRequest).listen(8000);
console.log("server has started!")

