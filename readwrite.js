var fs = require('fs');

// var readText = fs.readFileSync('readfile.txt', 'utf8');

// fs.writeFileSync('writeFile.txt', readText +
//   "writing file from reading file");



// fs.readFile('readfile.txt', 'utf8', function (err, data) {

//   fs.writeFile('writeFile.txt', data, function () {

//   })

// })




// fs.unlinkSync('writeFile.txt')

// fs.unlink('writeFile.txt', function () {
//   console.log("file deleted");
// })

fs.mkdir('newdir', function () {

  fs.readFile('readFile.txt', 'utf8', function (err, data) {
    console.log("file readed");

    fs.writeFile('newdir/writeFile.txt', data, function () {
      console.log("write file done")

      //now delete dir so we need to remove file insilde dir

      fs.unlink('./newdir/writeFile.txt', function () {
        console.log("file inside directory deleted")

        fs.rmdir('./newdir', function () {
          console.log("created directory deleted");
        })
      })

    })

  })
})

