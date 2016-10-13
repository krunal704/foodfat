var express = require('express');
var router = express.Router();
var path = require('path');
var foodinfo = require('../models/foodinfo');

router.get('/', function (req, res) {
    res.sendFile('food.html', { root: path.join(__dirname, '../assets/views') });
});

router.post('/add',function(req,res){


        //Logic to calculate the nutritional density of food item.

  var protein_dv = parseInt(req.body.protein) / 50;
  var df_dv = parseInt(req.body.fiber) / 25;
  var nutdensity = (protein_dv+df_dv+parseInt(req.body.vita)+parseInt(req.body.vitc)+parseInt(req.body.calcium)+parseInt(req.body.iron))/6;
  var cal_precent = parseInt(req.body.calorie)/ 2000;
  var final_nv = nutdensity/ cal_precent;

  console.log("Nut density"+ final_nv);

  console.log("pro density"+ protein_dv+"df_dv "+df_dv+"\ncal percent:"+cal_precent);

    var foodInfo = new foodinfo({
//Fetching the food items and saving it into the database
      "item_name": req.body.fname,
      "nf_calories": req.body.calorie,
      "nf_calories_from_fat": req.body.calfat,
      "nf_total_fat": req.body.fat,
      "nf_total_carbohydrate": req.body.Carbs,
      "nf_dietary_fiber": req.body.fiber,
      "nf_protein": req.body.protein,
      "nf_vitamin_a_dv": req.body.vita,
      "nf_vitamin_c_dv": req.body.vitc,
      "nf_calcium_dv": req.body.calcium,
      "nf_iron_dv": req.body.iron,
      "nf_serving_weight_grams": req.body.serving,
      "nutritional_density" : final_nv

    });

//Saving the item into the mongo db database
    foodInfo.save(function(err,result){
        console.log("Came to sace");
        if(!err){
            console.log("added");
            }
            else{
                console.log(err);
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
      else
      console.log("Deleted record successfully");
  });

});

module.exports = router;
