var http = require('http');
// var modfunc = require('./modulefunc');
var modulefunc = require('./modulefunc');


http.createServer(
  function (req, res) {

    res.write("addo wedaa auto restart nodemon --save -g");
    res.end();


  }


).listen(8080);

console.log("aoo");
modulefunc.funcnhellow();
modulefunc.funcbye();