//loading dependancies
var express = require('express');
var logger = require('morgan');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

//connecting to database

mongoose.connect("mongodb://localhost/testdb");  	//incomplete statement, add configuration here

//initialize express server
var app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())
app.use(logger('dev'));


//routes
app.use("/admin/rest",require('./routes/restaurant'))
app.use("/admin/login",require('./routes/user'))

app.use(express.static(__dirname+'/assets'));

//start server
app.listen(1234);
console.log("server is running on port 1234");