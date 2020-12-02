var http = require('http');

http.createServer(function (req, res) {
  console.log(req.url);

  res.writeHead(
    200,
    { "Content-Type": "application/json" })
  var jnObj = {
    name: "thusitha",
    age: 27,
    sex: "M"
  }

  res.end(JSON.stringify(jnObj));  //need to have type chunk,buffer or string



}).listen(8080, "127.0.0.1");

console.log("listen to port 8080");