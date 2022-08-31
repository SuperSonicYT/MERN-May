const http = require('http');
const fs = require('fs');
var express = require('express');
var app=express();

app.get('/courses', function(req,res) {
    fs.readFile('index.html', function(err,data) {
        res.write(data);
        return res.end();
      })
})
app.listen(8080);