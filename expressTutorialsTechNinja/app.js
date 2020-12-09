var express = require('express');
var app = express();
app.set('view engine', 'ejs'); //need to define template enjine it automatically access view folder

app.use('/assets', express.static('assets'));

app.get("/", function (req, res) {
  // res.send("default page");
  // res.sendFile(__dirname + "/home.html");
  res.render('index.ejs')
})

app.get('/Contact-Us', function (req, res) {
  // res.send('contactus page');
  // res.sendFile(__dirname + "/contactus.html");
  res.render('contactus.ejs');
})

app.get('/profile/:name', function (req, res) {
  // res.send('you have requested profile with id' + req.params.id
  // );
  var person = { age: 20, sex: 'M', hobbies: ['reading', 'writing', 'singing'] };
  res.render('profile.ejs', { name: req.params.name, data: person });
})
app.listen(8080);