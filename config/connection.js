//burgers app

//code to connect node to mysql...

//setup mysql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "temp",
    database: "burgers_db"
});

//make the connection
connection.connect(function(error) {
    if(error) {
        console.log("\nconnection.js... error connecting to mysql: ", error.stack);
        return;
    }
    console.log("\nconnection.js... success connecting to mysql... connection.threadId: ", connection.threadId);
});

//export the connection to the ORM (orm.js)
module.exports = connection;