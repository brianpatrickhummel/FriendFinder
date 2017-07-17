// Dependencies
// =============================================================
var bodyParser = require('body-parser');
var express = require('express');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/app/public'));   // load static content like css and js

// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
// =============================================================
require('./app/routing/apiRoutes.js')(app);  
require('./app/routing/htmlRoutes.js')(app);




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(){
  console.log("Listening on port: " + PORT);
});


