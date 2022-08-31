var express = require('express');
var router = express.Router();

var movies = [
    { id:101, name:'End Game', year:2018, rating:8.1},
    { id:102, name:'Love and Thunder', year:2022, rating:7.5},
    { id:103, name:'Dark knight', year:2014, rating:9.1},
    { id:104, name:'Flash', year:2008, rating:5.6},
]

router.get('/',function(req,res) {
    res.json(movies);
})

router.get('/:id',function(req,res) {
    var currMovie = movies.filter(function(movie) {
        if(movie.id == req.params.id) {
            return true;
        }
    });
    if(currMovie.length == 1) {
        res.json[currMovie[0]];
    }
    else {
        res.status(404);
        res.json({message:'Not Found'});
    }
    
})

module.exports = router;