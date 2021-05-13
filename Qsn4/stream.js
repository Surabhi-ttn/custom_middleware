var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('demo.txt');
readerStream.on('data', function(stm) {
   data += stm;
});

readerStream.on('end',function() {
   console.log(data);
});
