//Dependancies
var express = require('express');
var router = express.Router();

//models
var restaurant = require('../models/restaurant')
//router

router.get('/delete/:restID',function(req,res){

  restaurant.findByIdAndRemove(req.params.restID,function(err){
      if(err) throw err;
      else
      console.log("Deleted record successfully");
  });  

});
router.get('/update/:tagId',function(req,res){

console.log("The request tagid: "+req.params.tagId);

restaurant.findOneAndUpdate({ _id: '57e9748d758b74651a3d5044' }, { rest_name: req.params.tagId }, function(err, restaurant) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(restaurant);
  res.send(restaurant);
});

console.log("The requested value has been updated!!");
});


// router.get('/',function(req,res){
// 	var newUser = new user({
// 		"FirstName":"Jeet",
// 		"LastName":"Virani",
// 		"password":"Akshar",
// 	    "gender":"male",
// 		"email":"viranijitu19@gmail.com",
// 		"dob":19/08/1994,
// 		"height":167,
// 		"weight":70,
// 		"profilepic":"null",
// 		"zipcode":395006,
// 		"country":"India",
// 		"lastlogin":new Date,
// 		"calorieintake":1200,
// 		"weightlost":10,
// 		"isallergic":"yes",
// 	/*	"allergy":[{
// 			"chocoallergy":true,
// 			"allergy2":true,
// 			"diabetic":false
// 		}],*/
// 		"dailystepgoal":2500
// 	})
// 	newUser.save(function(err,result){
// 		if(!err){
// 			console.log("added");
// 			user.find({"LastName":"Virani","password":"Akshar"},function(err,result){
// 				res.json(result);
// 			})
// 		}
// 	})
// })


module.exports = router;
