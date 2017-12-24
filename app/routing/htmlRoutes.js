// Routing for HTML page requests
var path = require("path");
var express = require("express");

module.exports = function(app) {
  // Sends survey.html when the /survey url receives GET request
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  // Sends home.html as default response when /survey or /api/friends isn't requested
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });
};
