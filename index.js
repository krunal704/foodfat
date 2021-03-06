//loading dependancies
var express = require('express');
var logger = require('morgan');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var session = require('express-session');

//connecting to database

//mongoose.connect("mongodb://localhost:27017/fst");  	//incomplete statement, add configuration here
mongoose.connect("mongodb://mistryakshar54:aks1611947@ds153735.mlab.com:53735/fst");
//initialize express server
var app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(logger('dev'));

//initialize session
app.use(session({secret: 'jasnfbaonbfpusnfjsblhgrougvyrwfhsbdhf'}));

//routes
app.use("/admin/user",require('./routes/user'))
app.use("/admin/rest",require('./routes/restaurant'))
app.use("/admin/login",require('./routes/user'))
app.use("/admin/food",require('./routes/foodinfo'))
app.use("/admin/test",require('./routes/testAPI'))

app.use("/admin/rest",require('./routes/testing'))

app.use("/admin/feedback",require('./routes/feedback'))

app.use("/appuser/login",require('./routes/user'))
app.use("/range", express.static(__dirname+'/bower_components/datetimeRangePicker'))

app.use(express.static(__dirname+'/assets'));

//start server
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
