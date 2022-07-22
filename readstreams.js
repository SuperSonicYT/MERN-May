var fs = require('fs');
var data='';

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf-8');

readerStream.on('data', function(chunks) {
    console.log("Current chunk:\n"+chunks);
    data+=chunks;
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});

readerStream.on('end',function() {
    console.log("Data from file:"+data);
})