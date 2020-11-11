var fs = require('fs');

var myreadStream = fs.ReadStream(__dirname + '/readStream.txt', 'utf8');

myreadStream.on('data', function (chunk) {
  console.log("stream recived")
  console.log(chunk);
})