var http = require('http');
var fs = require('fs');

http.createServer(onRequest).listen(8000);
console.log("server has started!")

//404 response
function send404Response(res){
    res.writeHead(404, {"Cotent-Type": "text/plain"});
    res.write("Error 404 page not found");
    res.end();

}

// handle the request
function onRequest(req,res) {
    /*
    This if checks if the request if from GET method and only as root call. Any other calls will be given in else
     */
    if(req.method == "GET" && req.url == "/"){
        res.writeHead(200,{"Cotent-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(res);
    }else{
        send404Response(res);
    }
}

/*
function onRequest(req, res){
	console.log(" A user request has been made: " + req.url);
	res.writeHead(200, { "Context-Type": "text/plain"});
	res.write("Here is your respnsonse");
	res.end();
}

*/