var express = require('express')
var app = express();

var todoController = require('./controllers/todoController')

//set template engine
app.set('view engine', 'ejs')

//set static files
app.use(express.static('./public'))
todoController(app);

app.listen(3000);
console.log('server starting at port 3000')