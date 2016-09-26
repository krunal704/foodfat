//Dependancies
var express = require('express');
var router = express.Router();

//models
//router

var restaurant = require('../models/restaurant')
router.get('/',function(req,res){
	var restaurant_inf = new restaurant({
		"rest_name" : "TCR",
		"rest_address" : "Infocity,Gandhinagar",
		"rest_loc" : [
		-73.856077,
		40.848447
		],
		"phoneno" : "9033808520",
		"rest_email" : "mistry@gmail.com",
		"opening_status" : "OPEN",
		"owner_mail_id" : "mistry@gmail.com",
		"restraunt_website" : "ponchies.com",
		"rest_time" : "6:00AM-7:00PM",
		"rest_city" : "Gandhinagar",
		"rest_menu" : {
		"food_id" : "1",
		"food_price" : "3000"
		},
		"zipcode" : 382421,
		"country_id" : "2",
		"rating" : "3",
		"rest_food_type" : "Veg"
	})
	restaurant_inf.save(function(err,result){
		if(!err){
			console.log("added");
			}
	})
})
module.exports = router;
