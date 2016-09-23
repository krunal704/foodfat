var mongoose = require('mongoose');

//schema
var userSchema = new mongoose.Schema({
	"FirstName":String,
	"LastName":String,
	"password":String,
	"gender":String,
	"email":String,
	"dob":Date,
	"height":Number,
	"weight":Number,
	"profilepic":String,
	"zipcode":Number,
	"country":String,
	"lastlogin":{ type: Date, default: Date.now },
	"calorieintake":Number,
	"weightlost":Number,
	"isallergic":Boolean,
	//"allergy":[],
	"dailystepgoal":Number
})

module.exports = mongoose.model('user',userSchema);