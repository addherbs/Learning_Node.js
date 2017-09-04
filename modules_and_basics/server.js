var http = require('http');
var fs = require('fs');

http.createServer(onRequest).listen(8000);
console.log("server has started!")

function onRequest(req, res){
	console.log(" A user request has been made: " + req.url);
	res.writeHead(200, { "Context-Type": "text/plain"});
	res.write("Here is your respnsonse");
	res.end();
}
