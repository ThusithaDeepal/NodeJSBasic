var http = require('http');
var fs = require('fs');


// var myReadStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf8');
// var mywriteStream = fs.WriteStream(__dirname + '/writeStream.txt');

// myReadStream.pipe(mywriteStream);


http.createServer(function (req, res) {

  var myReadStream = fs.createReadStream(__dirname + '/web.html', 'utf8');




  console.log(req.url);

  res.writeHead(200, { "Content-Type": 'text/html' });
  myReadStream.pipe(res);


}).listen(8080, '127.0.0.1');

console.log("listen to port 8080");
