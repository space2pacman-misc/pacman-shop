var http = require("http");
var fs = require("fs");
var server = http.createServer(onRequest);

server.listen(7777);

function onRequest(request, response) {
	var pathname = request.url;

	if(pathname === "/") {
		var file = fs.readFileSync("index.html");

		response.writeHead(200);
		response.write(file);
	} else if(pathname.includes("/public/")) {
		var file = fs.readFileSync(__dirname + request.url);

		response.writeHead(200);
		response.write(file);
	} else if(pathname.includes("/modules/")) {
		var file = fs.readFileSync(__dirname + request.url);

		response.writeHead(200, { "Content-Type": "application/javascript" });
		response.write(file);
	} else {
		response.writeHead(404);
		response.write("404 not found");
	}

	response.end();
}