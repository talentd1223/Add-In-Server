var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("server already started localhost...");
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);

  var filename = "." + q.pathname;
  
  //"binary" | "hex"
  fs.readFile(filename, "base64", function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
	  
	  console.log("-> from server file sent " + filename + ":");
    res.write(data);
    //res.write(btoa("response data sent! " + filename));
    return res.end();
  });
}).listen(80);

/*
var http = require('http');
var url = require('url');
var fs = require('fs');

var port = 80;
var server = "localhost";

var files = ["./downfiles/Template1.docx", "./downfiles/Template2.docx", "./downfiles/Template3.docx"];

console.log("server start " + server + ":" + port);

http.createServer(function (req, res) {

  var q = url.parse(req.url, true);

  if(q.pathname == "/downfiles"){

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'});

    for(i in files){
      fs.readFile(files[i], "base64", function(err, data) {       
        console.log("Sent filename: " + files[i] + " !!!");
        res.write("recved file :" + files[i]);
      });
    }
    return res.end();
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end("404 Not Found");
  }
}).listen(port);
*/