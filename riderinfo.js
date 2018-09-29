var Sequelize = require("sequelize");
var sequelize = require("../routes/api-routes.js");

var Rider = sequelize.define("Rider", {
    name: Sequelize.STRING,
    number: Sequelize.STRING,
    gender: Sequelize.STRING,
    destination: Sequelize.STRING,
    route: Sequelize.STRING,
    passengers: Sequelize.STRING,
    rating: Sequelize.STRING,
});

Rider.sync();

module.exports = Rider;