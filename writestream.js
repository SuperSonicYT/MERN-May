var fs = require('fs');
var zlib = require('zlib');

var readerStream = fs.createReadStream('input.txt.gz');
var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(zlib.createGunzip()).pipe(writerStream);

console.log("Data transferred");