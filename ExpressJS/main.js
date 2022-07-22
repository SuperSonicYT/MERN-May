var express = require('express');
var app = express();

var courses = require('./courserouter.js');
app.use('/courses',courses);

app.listen(3000);