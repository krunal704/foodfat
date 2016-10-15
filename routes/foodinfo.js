var express = require('express');
var router = express.Router();
var path = require('path');
var foodinfo = require('../models/foodinfo');

router.get('/', function (req, res) {
    res.sendFile('food.html', { root: path.join(__dirname, '../assets/views') });
});

router.get('/getfood', function (req, res) {
  console.log("Route to fetch all foodinfo..");
  foodinfo.find({},function(err,result){
          res.json(result);
        })
//  res.send(feedbackdata);

  console.log("foodinfo log data: ");
});

router.post('/add',function(req,res){


        //Logic to calculate the nutritional density of food item.

  var protein_dv = parseInt(req.body.protein) / 50;
  var df_dv = parseInt(req.body.fiber) / 25;
  var nutdensity = (protein_dv+df_dv+parseInt(req.body.vitamin_a)+parseInt(req.body.vitamin_c)+parseInt(req.body.calcium)+parseInt(req.body.iron))/6;
  var cal_precent = parseInt(req.body.calories)/ 2000;
  var final_nv = nutdensity/ cal_precent;

  console.log("Nut density"+ final_nv);

  console.log("pro density"+ protein_dv+"df_dv "+df_dv+"\ncal percent:"+cal_precent);

    var foodInfo = new foodinfo({
//Fetching the food items and saving it into the database
      "item_name": req.body.fname,
      "nf_calories": req.body.calories,
      "nf_calories_from_fat": req.body.calfat,
      "nf_total_fat": req.body.fat,
      "nf_total_carbohydrate": req.body.carbs,
      "nf_dietary_fiber": req.body.fiber,
      "nf_protein": req.body.protein,
      "nf_vitamin_a_dv": req.body.vitamin_a,
      "nf_vitamin_c_dv": req.body.vitamin_c,
      "nf_calcium_dv": req.body.calcium,
      "nf_iron_dv": req.body.iron,
      "nf_serving_weight_grams": req.body.serving,
      "nutritional_density" : final_nv

    });

//Saving the item into the mongo db database if same item doesnot exist

foodinfo.findOne({"item_name":req.body.fname},function(err,result){
  if(result)
  {
    res.send("A food of such name already exists.");
  }
  else {
    foodInfo.save(function(err,result){
        console.log("Came to sace");
        if(!err){
            console.log("added");
            //res.write("food added successfully");
          res.send("The requested food has beed successfully added.");


            }
            else{
                res.send(err);
            }
    });
  }

});




});



//route for updating the food information
router.post('/update',function(req,res){

console.log("The request  in update tagid: "+req.body.fname);

foodinfo.findOneAndUpdate({ _id: '57f0a5e3dfe91d202a978d74' }, { food_name: req.body.fname }, function(err, foodinfo) {
  if (err) throw err;

  res.send(foodinfo);
  console.log(foodinfo);
});


console.log("The requested value has been updated!!");
});



//route to delete the food information
router.get('/delete/:foodID',function(req,res){
console.log("Deleted record successfully"+req.params.foodID);


  foodinfo.findByIdAndRemove(req.params.foodID,function(err){
      if(err) throw err;
      else{
        res.send("Deleted record successfully");
        console.log("Deleted record successfully");
      }
      
  });

});

module.exports = router;
