//burgers app

var connection = require("../config/connection.js");

//var orm = {key: value, key: "value"} //orm object containes all sql functions
//selectAll()
//insertOne();
//updateOne();

var orm = {
    //read
    selectAll: function(table, callback) {
        //SELECT * FROM burgers;
        var query = "SELECT * FROM " + table + ";";
        console.log("\norm.js... query = ", query);
        connection.query(query, function(error, queryResults) {
            if(error) {
                console.log("orm.js... connection.query() = ", query);
                throw error;
            }            
            console.log("\norm.js... queryResults = \n");
            console.log(queryResults);
            callback(queryResults);
        });
    },
    //------------------------------------------------------
    //create
    insertOne: function(table, columns, values, callback) {
    //INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Cheeseburger', true);
        var query = "INSERT INTO " + table + " (" + columns.toString() + ") " + "VALUES (?,?) ";

        console.log("\norm.js... query = ", query);

        connection.query(query, values, function(error, queryResults) {
            if(error) {
                console.log("\norm.js... connection.query() = ", query);
                throw error;
            }            
            console.log("\norm.js... queryResults = ", queryResults);
            callback(queryResults);
        });       
    },
    //------------------------------------------------------
    //update
    // example column values... { burger_name: Chicken Burger, devoured: 1(true) }
    updateOne: function(table, object, condition, callback) {
                // UPDATE burgers SET devoured = true WHERE id = 7;
        var query = "UPDATE " + table + " SET " + "devoured" + " = " + object.devoured + " WHERE " + condition + ";";
        console.log("\norm.js... query = ", "'"+query+"'"); // UPDATE burgers SET [object Object] WHERE [object Object] = id = 1;
        
        connection.query(query, function(error, queryResults) {
            if(error) {
                console.log("orm.js connection.query() = ", query);
                throw error;
            }
            console.log("queryResults = ", queryResults);
            callback(queryResults);
        }); 

    }

};


//export to 'model' (burger.js)
module.exports = orm;