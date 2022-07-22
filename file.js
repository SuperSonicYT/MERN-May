var fs = require('fs');
const { resourceUsage } = require('process');

var data= fs.readFileSync('input.txt');
console.log("Synchronous read:"+data);
console.log("Sync ended");

fs.readFile('input.txt', function(err,data) {
    if(err) {
        return console.log(err);
    }
    console.log('Asynchronous read:'+data);
    console.log("Async ended");
})

function printHello() {
    console.log("Hello World");
}
var t = setInterval(printHello,2000);

console.log("Program ended");
console.log(__filename);
console.log(__dirname);