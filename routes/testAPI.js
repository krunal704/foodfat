//Dependancies
var express = require('express');
var router = express.Router();

//calling the rest client
var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// direct way to make a guest 
router.get('/',function(req,res){

console.log("Hello");

var urltonutritionx = "https://api.nutritionix.com/v1_1/search/taco?appId=7ab267ec&appKey=eb4ef3f6f990261bf762e091001c145b";
client.get(urltonutritionx, function (req, res) {
    // parsed response body as js object 
    console.log(req);
    // raw response 
    console.log(res);
});

});


module.exports = router;
// var urltonutritionx = "https://api.nutritionix.com/v1_1/search/taco?appId=7ab267ec&appKey=eb4ef3f6f990261bf762e091001c145b";
// client.get(urltonutritionx, function (req, res) {
//     // parsed response body as js object 
//     console.log(data);
//     // raw response 
//     console.log(response);
// });



