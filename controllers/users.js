var http = require('http');
var express = require('express');

var router = express.Router();


const Instagram = require('./instagramInstance');

router.get('/', function(req, res, next) {
  
  return Instagram
  .searchBy('hashtag', 'tuncobeach')
  .then((t) => {
    res.send(t);
  })

});

module.exports = router;
