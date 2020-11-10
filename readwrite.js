var fs = require('fs');

// var readText = fs.readFileSync('readfile.txt', 'utf8');

// fs.writeFileSync('writeFile.txt', readText +
//   "writing file from reading file");



fs.readFile('readfile.txt', 'utf8', function (err, data) {

  fs.writeFile('writeFile.txt', data, function () {

  })

})