//burgers app

//import express
//import burger.js (model)

var express = require("express");

//create the router for the app and export the router at the end of the file
var router = express.Router();

var burger = require("../models/burger.js");

//read
router.get("/", function(request, response) {
    console.log("\ncontroller.js... router.get('/') was requested by the browser!");
    burger.selectAll(function(data) {
        var handleBarsObject = { burgers: data };
        console.log("\ncontroller.js... handleBarsObject = \n");
        console.log(handleBarsObject);
        response.render("index", handleBarsObject);
    });
});

//create
//router.post();
router.post("/api/burgers", function(request, response) {
  //default the boolean devoured field to 'false' when a new burger is created
    burger.insertOne(["burger_name", "devoured"], [request.body.name, false], function(result) {
        response.json({ id: result.insertId });
    });
});

//update
//router.put();
router.put("/api/burgers/:id", function(request, response) {
    var condition = "id = " + request.params.id;
    console.log("\ncontroller.js... condition = ", "'"+condition+"'");
      
    burger.updateOne({ id: request.body.id, name: request.body.burgerName, devoured: request.body.devoured }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return response.status(404).end();
      } else {
        response.status(200).end();
      }
    });
  });

//export routes to server.js
module.exports = router;