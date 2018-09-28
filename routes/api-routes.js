// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/api/drivers/", function(req, res) {
    db.Driver.findAll({})
      .then(function(dbDriver) {
        res.json(dbDriver);
      })
      .catch(function(err) {
        //DO Seomthing
        res.json('{"Error":"Coud nmot find stuff"}');
      });
  });

  app.post("/api/driver", function(req, res) {
    console.log(req.body);
    db.Driver.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbDriver) {
      res.json(dbDriver);
    });
  });

  app.get("/api/riders/", function(req, res) {
    db.Rider.findAll({})
      .then(function(dbRider) {
        res.json(dbRider);
      })
      .catch(function(err) {
        //DO Seomthing
        res.json('{"Error":"Coud nmot find stuff"}');
      });
  });

  app.post("/api/Rider", function(req, res) {
    console.log(req.body);
    db.Rider.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbRider) {
      res.json(dbRider);
    });
  });
};
