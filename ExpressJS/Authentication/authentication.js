//importing packages
var express = require('express');
var app=express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload=multer();
var session = require('express-session');
var cookieParser = require('cookie-parser');

//static files
app.use('/images',express.static('views/images'));
app.use('/fonts',express.static('views/fonts'));
app.use('/css',express.static('views/css'));
app.use('/scss',express.static('views/scss'));
app.use('/vendor',express.static('views/vendor'));
app.use('/js',express.static('views/jss'));
//setting UI views
app.set('view engine','pug');
app.set('views','./views');

//configuring middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret:"Authentication secret key"}));

var Users = [];

app.get('/signup', function(req,res) {
    res.render('signup');
});

app.post('/signup',function(req,res) {
    console.log(req.body);
    if(!req.body.name || !req.body.password || !req.body.email || !req.body.re_password) {
        res.render('signup',{
            message:"All fields are mandatory"
        });
    } 
    else if(req.body.password!=req.body.re_password) {
        res.render('signup',{
            message:"Passwords entered did not match! please try again."
        });
    }
    else {
        Users.filter(function(user) {
            if(user.email==req.body.email) {
                console.log(user);
                res.render('signup',{
                    message:"User already exists! Login or choose another email"
                });
            }
        });
        var newUser = { name:req.body.name,email:req.body.email,password:req.body.password };
        Users.push(newUser);
        res.redirect('/signin');
    }
});

app.get('/signin',function(req,res) {
    res.render('signin');
});

app.post('/signin',function(req,res) {
    console.log(Users);
    if(!req.body.email || !req.body.password) {
        res.render('signin', {
            message:"Email address or password missing!"
        })
    }
    else {
        Users.filter(function(user) {
            if(user.email==req.body.email && user.password==req.body.password) {
                req.session.user = user;
                res.redirect('/');
            }
        });
        res.render('signin',{
            message: "Invalid credintials"
        });
    }
});

function checkSignIn(req,res,next){
    if(req.session.user) {
        next();
    }
    else {
        var err = new Error('Not logged in');
        next(err);
    }
}

app.get('/',checkSignIn,function(err,req,res) {
    if (err)  {
        res.render('signin',{
            message:"Please sign in to access the website"
        })
    }
    res.render('index',{email:req.session.user.email});
})

app.listen(3000);

