var express = require('express');
var app = express();



app.get("/", function (req, res) {
  res.send("default page");
})

app.get('/Contact-Us', function (req, res) {
  res.send('contactus page');
})

app.get('/profile/:id', function (req, res) {
  res.send('you have requested profile with id' + req.params.id
  );
})
app.listen(8080);