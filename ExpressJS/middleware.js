var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req,res,next) {
    console.log("Start");
    next();
});

app.get('/', function(req,res,next) {
    console.log("Middle");
    next();
});

app.use(function(req,res,next) {
    console.log("End");
    next();
});

app.listen(3000);