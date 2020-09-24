var http = require('http');
var url = require('url');

http.createServer(
  function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.write("adooo"); //write a response to the client
    res.write(req.url);


    var q = url.parse(req.url, true).query
    var txtDate = "Date is" + q.date;
    res.write(txtDate);
    res.end("helloee world"); //end the response


  }

).listen(8080);

console.log("Adoo");