var express = require('express');
var app = express();

app.use("/mycss", express.static(__dirname + "/css"));


app.get('/', function (req, res) {
  res.sendFile(
    __dirname + "/" + "home.html"

    // , {
    //   root: __dirname
    // }

  );
});

app.listen(8080,
  function () {
    console.log("server starting at 8080");
  });