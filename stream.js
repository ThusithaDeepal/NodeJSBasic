var fs = require('fs');

var myreadStream = fs.ReadStream(__dirname + '/readStream.txt', 'utf8');
var mywriteStream = fs.WriteStream(__dirname + '/writeStream.txt');

myreadStream.on('data', function (chunk) {
  // console.log("stream recived")
  // console.log(chunk);

  mywriteStream.write(chunk);
})