var express = require('express');
var router = express.Router();

// Require Hero model for db
var Hero = require('../models/hero');

// add a new superhero to the database
 router.post('/', function (req, res) {
   console.log('POST', req.body);
   var hero = Hero(req.body);
   console.log(hero);
   hero.save(function (err) {
     if (err) {
      //  res.sendStatus(500);
       console.log('oops');
       return;
     }
     res.sendStatus(201);
   });
 });

router.get('/', function (req, res) {
  Hero.find({}, function(err, heroes) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(heroes);
  });
});

router.delete('/:id', function (req, res) {
  var id = req.params.id;
  Hero.findByIdAndRemove(id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.sendStatus(204);
  });
});


module.exports = router;
