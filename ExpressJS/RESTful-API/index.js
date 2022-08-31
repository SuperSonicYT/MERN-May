var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var cookieParser = require('cookie-parser');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
var upload = multer(); 
app.use(upload.array());


app.set('view engine', 'pug');
app.set('views','./views');


var movies = require('./movies.js');

app.use('/movies',movies);

app.listen(3000);