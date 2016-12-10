'use strict'

var router = require('express').Router();
var database = require('./c37_modules/database');

module.exports = function() {

  router.get('/', function(req,res){
    return res.render('helloworld.html');
  });

  router.get('/trains', function(req,res){
    return res.render('trains.html');
  });

  router.get('/trains/data', function(req,res){
    database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
    });
  });

  router.post('/trains/data', function(req,res){
    var query = "insert into trains (trainNumber, lineColor, inService) values ("+ req.body.trainNumber + ",'" + req.body.lineColor + "'," + req.body.inService +");"

    database.executeQuery(query, function(results) {
      res.send(results);
    });
  });

  /* Your code here */

  return router
}();
