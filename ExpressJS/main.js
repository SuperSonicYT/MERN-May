var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();
var upload = multer();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MERN-May-PAP');

var userSchema = mongoose.Schema({
    name: String,
    email: String
});
var User = mongoose.model("User",userSchema);

app.set('view engine','pug');
app.set('views','./UI_templates');

app.use('/public',express.static('public'));
app.use('/assets',express.static('assets'));

app.use('/courses',function(req,res,next) {
    console.log("request received at"+Date.now());
    next();
});

var courses = require('./courserouter.js');
app.use('/courses',courses);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(upload.array());

app.get('/',function(req,res) {
    res.render('index',{
        name:"Akash Soni",
        course:"MERN Stack",
    });
});

app.post('/', function(req,res) {
    var userInfo = req.body;

    if(!userInfo.uname || !userInfo.email)
        res.render('show_message',{
            message:"Sorry your data could not be processed",
            type:"error"
        });
    else        
        var newUser = new User({
            name:userInfo.uname,
            email:userInfo.email
        });
    
    newUser.save(function(err, User) {
        if(err)
            res.render('show_message',{
                message:"Database error",
                type:"error"
            });
        else
            res.render('show_message',{
                message:"New person added",
                type:"success",
                User
            });
    });
});

app.get('/users',function(req,res) {
    User.find(function(err,response) {
        res.json(response);
    });
});

app.get('/users/:id',function(req,res) {
    User.findById(req.params.id, function(err,response) {
        if(err) res.json({message:"Could not find"});
        res.json(response);
    });
});

app.put('/users/:id',function(req,res) {
    User.findByIdAndUpdate(req.params.id,req.body, function(err,response) {
        if(err) res.json({message:"Could not update"});
        res.json(response);
    });
});

app.delete('/users/:id',function(req,res) {
    User.findByIdAndRemove(req.params.id, function(err,response) {
        if(err) res.json({message:"Could not deleted"});
        res.json(response);
    });
});


app.listen(3000);