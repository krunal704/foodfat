//loading dependancies
var express = require('express');
var logger = require('morgan');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

//connecting to database

//mongoose.connect("mongodb://localhost/FST");  	//incomplete statement, add configuration here
mongoose.connect("mongodb://mistryakshar54:aks1611947@ds153735.mlab.com:53735/fst");
//initialize express server
var app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(logger('dev'));


//routes
app.use("/admin/rest",require('./routes/restaurant'))
app.use("/admin/login",require('./routes/user'))
app.use("/admin/food",require('./routes/foodinfo'))
//app.use("/admin/test",require('./routes/testAPI'))

app.use("/admin/rest",require('./routes/testing'))

app.use("/admin/feedback",require('./routes/feedback'))


app.use(express.static(__dirname+'/assets'));

//start server
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
