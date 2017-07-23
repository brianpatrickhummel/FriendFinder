// Routing for API data requests

// Required files for data queries
var friendsArray  = require('../../data/friends.js');

module.exports = function (app) {

  // Display all friends as raw JSON
  app.get('/api/friends', function(req, res){
    res.json(friendsArray);
  });


  // Display all possible friends prettified
  // Configure Express and Handlebars for serving JSON data in a prettified format
  var exphbs = require('express-handlebars');
  app.engine('handlebars', exphbs({ 
      defaultLayout: 'main',
      helpers: {
        toJSON : function(object) {
          return JSON.stringify(object);
        }
      }
    })
  );
  app.set('view engine', 'handlebars');
  // Display all possible friends prettified
  app.get('/api/potentialfriends', function(req, res){
    var friendsJSON = {objects: friendsArray};
    res.render("friends", friendsJSON);
  });

  
  
  // Add incoming survey results and update compatibility data
  app.post('/api/friends', function(req, res){
    // console.log(req.body);
    friendsArray.push(req.body);
    res.json(friendsArray);
  });
};