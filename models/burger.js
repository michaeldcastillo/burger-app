//burgers app

//import orm.js
var orm = require("../config/orm.js");

//create code that will call the orm functions with specific input
/* 
var burger = { read: function() {}, create: function() {}, update: function() {} };
*/

var burger = { 
    selectAll: function(callback) {
        orm.selectAll("burgers", function(response) {
            console.log("\nburger.js (model)... orm.selectAll('burgers')... response = \n");
            console.log(response);
            callback(response);
        });
    }, 
    insertOne: function(columns, values, callback) {
        orm.insertOne("burgers", columns, values, function(response) {
            console.log("\nburger.js (model)... orm.insertOne('burgers')... response = \n");
            console.log(response);
            callback(response);
        });
    }, 
    updateOne: function(object, condition, callback) {
        orm.updateOne("burgers", object, condition, function(response) {
            console.log("\nburger.js (model)... orm.udpateOne('burgers')... response = \n");
            console.log(response);
            callback(response);
        });       
    } 
};

//export for the controller (burgers_controller.js)
module.exports = burger;