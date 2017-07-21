// Routing for HTML page requests
var path = require('path');
var express = require('express');


module.exports = function (app) {
  // Sends survey.html when the /survey url receives GET request
  app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

// ==================== Load Error Page =========================
  // when an erroneous url of api/? is entered, display this page
  // can't get this page to serve

  // app.get('/api/?', function(req, res){    
  //     res.sendFile(path.resolve('app/public/error.html'));
  // }); 

// ==============================================================




  app.get('/api/?', function(req, res){    
    res.sendFile(path.resolve('app/public/error.html'));
});

  // Sends home.html as default response when /survey isn't requested
  app.use(function(req, res){
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};