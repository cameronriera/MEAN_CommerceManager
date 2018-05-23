const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    session = require('express-session'), 
    flash = require('express-flash'), 
    routes = require('./server/config/routes.js'),
    path = require('path'),
    uuid = require('uuid');

 

app.use(express.static( __dirname + '/client/dist/client' ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
routes(app);
mongoose.connect("mongodb://localhost/pet_database");


app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
  });

app.listen(6789, () => {
    console.log("listening on port " + 6789);
});