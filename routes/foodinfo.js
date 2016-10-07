var express = require('express');
var router = express.Router();
var foodinfo = require('../models/foodinfo');

router.post('/add',function(req,res){

<<<<<<< HEAD
    console.log("reached to add functionality!!");
    console.log("l;amsc;lasc: "+req.body.fname);


   var foodInfo = new foodinfo({

        "food_name":req.body.fname,
        "no_of_serving":req.body.noofserving,
        "serving_size":req.body.servingsize,
        "carbs":req.body.Carbs,
        "fat":req.body.fat,
        "protein":req.body.protein,
        "calories":req.body.calories,
        "cholestrol":req.body.cholestrol,
        "sodium":req.body.sodium,
        "vitamin":req.body.vitamins,
        "calcium":req.body.calcium,
        "iron":req.body.iron,
        "is_favourite":req.body.favourite,
        "is_active":req.body.active,
        "ingredient":{
            "ing1": 2,
            "ing2":5
        }

=======
router.get('/',function(req,res){

    var foodInfo = new foodInfo({
          "item_name": "Malai Kofta",
          "nf_calories": 131,
          "nf_calories_from_fat": 52,
          "nf_total_fat": 5,
          "nf_total_carbohydrate": 15,
          "nf_dietary_fiber": 1,
          "nf_protein": 5,
          "nf_vitamin_a_dv": 0,
          "nf_vitamin_c_dv": 10,
          "nf_calcium_dv": 40,
          "nf_iron_dv": 6,
          "nf_serving_weight_grams": 100
>>>>>>> 2cc5746587bc1af60305884098df13c91ea416e2
    })

    foodInfo.save(function(err,result){
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

console.log("The request  in update tagid: "+req.body.fname);

foodinfo.findOneAndUpdate({ _id: '57f0a5e3dfe91d202a978d74' }, { food_name: req.body.fname }, function(err, foodinfo) {
  if (err) throw err;

  res.send(foodinfo);  
  console.log(foodinfo);
});


console.log("The requested value has been updated!!");
});


router.get('/delete/:foodID',function(req,res){
console.log("Deleted record successfully"+req.params.foodID);


  foodinfo.findByIdAndRemove(req.params.foodID,function(err){
      if(err) throw err;
      else
      console.log("Deleted record successfully");
  });  

});

<<<<<<< HEAD
module.exports = router;
=======
});
>>>>>>> 2cc5746587bc1af60305884098df13c91ea416e2
