
var express = require('express');
var courserouter = express.Router();
courserouter.get('/', function(req,res) {
    res.send('Courses');
});
courserouter.get('/coursedetails/:id([0-9]{2})', function(req,res) {
    res.send("The id specified is " + req.params.id);
});
courserouter.get('*', function(req,res) {
    res.send("Sorry this is an invalid URL");
});
module.exports=courserouter;