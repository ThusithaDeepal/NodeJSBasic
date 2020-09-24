var http = require('http');
var express = require('express');
var app = express();


app.get("/", function (req, res) {
  res.send("adoo default route");
});
app.listen(8080,

  function () {


    console.log("Adoo");
  });