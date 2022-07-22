var buf1 = new Buffer(10);
var buf2 = new Buffer([10,20,30,40,50]);
var buf3 = new Buffer("NodeJS","utf-8");

length = buf1.write("MERN");
console.log("Octets written:"+length);
console.log(buf2.toJSON(buf2));
console.log(buf2.toString('utf-8'));

