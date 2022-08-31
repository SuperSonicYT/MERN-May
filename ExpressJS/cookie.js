var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/clear',function(req,res) {
    res.clearCookie('name');
    res.send("cookie cleared");
})
app.listen(3000);