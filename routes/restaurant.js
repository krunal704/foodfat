//Dependancies
var express = require('express');
var router = express.Router();
var path = require('path');
//models
//router

var restaurant = require('../models/restaurant');

router.get('/', function (req, res) {
	res.sendFile('restaurant.html',{root:path.join(__dirname,'../assets/views')});
});

router.post('/add',function(req,res){

	console.log("reached to add functionality!!");
	console.log("l;amsc;lasc: "+req.body.name);


	var restaurant_inf = new restaurant({
		"rest_name" : req.body.name,
		"rest_address" : req.body.Address,
		"rest_loc" : [
		-73.856077,
		40.848447
		],
		"phoneno" : req.body.phone,
		"rest_email" : req.body.email,
		"opening_status" : req.body.open,
		"owner_mail_id" : req.body.owner_email,
		"restraunt_website" : req.body.website,
		"rest_time" : req.body.time,
		"rest_city" : req.body.city,
		"rest_menu" : {
		"food_id" : 1,
		"food_price" : 3000
		},
		"zipcode" : req.body.zipcode,
		"country_id" : req.body.country_id,
		"rating" : req.body.rating,
		"rest_food_type" : req.body.food_type
	})
	restaurant_inf.save(function(err,result){
		console.log("Came to sace");
		if(!err){
			console.log("added");
			}
			else{
				console.log(err);
			}
	})
});

router.post('/update',function(req,res){

console.log("The request  in update tagid: "+req.body.name+" "+req.body.email);

restaurant.findOneAndUpdate({ _id: '57eecefc257a430951f6009e' }, { rest_name: req.body.name,rest_email : req.body.email }, function(err, restaurant) {
  if (err) throw err;

  // we have the updated user returned to us
	//console.log(restaurant);
  res.send(restaurant);
  console.log(restaurant);
});


console.log("The requested value has been updated!!");
});


router.get('/delete/:restID',function(req,res){
console.log("Deleted record successfully"+req.params.restID);


  restaurant.findByIdAndRemove(req.params.restID,function(err){
      if(err) throw err;
      else
      console.log("Deleted record successfully");
  });

});





module.exports = router;
