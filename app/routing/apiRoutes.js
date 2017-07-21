// Routing for API data requests

// Required files for data queries
var friendsArray  = require('../../data/friends.js');

module.exports = function (app) {
  // Display all possible friends
  app.get('/api/friends', function(req, res){
    res.json(friendsArray);
  });

// ==================== Load Error Page =========================
  // when an erroneous url of api/? is entered, display this page
  // can't get this page to serve

  // app.get('/api/?', function(req, res){    
  //     res.sendFile(path.resolve('app/public/error.html'));
  // });

// ==============================================================

  // Add incoming survey results and update compatibility data
  app.post('/api/friends', function(req, res){
    // console.log(req.body);
    friendsArray.push(req.body);
    res.json(friendsArray);
  });
};