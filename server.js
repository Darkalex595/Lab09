var express = require('express');
var path = require("path");
var exphs = require('express-handlebars');

var app = express();

var waitingArray = [
    {
      customerName: "Saima",
      customerEmail: "saima@example.com",
      phoneNumber: "000-000-0000",
      customerID: "saimaCool"
    }
  ];

  var tableArray = [
    {
      customerName: "Ahmed",
      customerEmail: "ahmed@example.com",
      customerID: "afhaque89",
      phoneNumber: "000-000-0000"
    }
  ];

  app.engine("handlebars", exphs({defaultLayout: "main"}))
  app.set("view engine", "handlebars")

  app.get("/api/tables", function(req, res) {
    res.json(tableArray);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waitingArray);
  });

  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
      tableArray.push(req.body);
      res.json(true);
    }
    else {
      waitingArray.push(req.body);
      res.json(false);
    }
  });

  app.get("/tables", function(req, res) {
    res.render("tables", {
        mesas: tableArray,
        espera: waitingArray
    });
  });

  app.get("/reserve", function(req, res) {
    res.render("reserve");
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.render("home");
  });
  

app.listen(3000, function(){
    console.log("Server listening in 3000");
})