var express = require('express');
var router = express.Router();


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
    })

    foodInfo.save(function(error,result){

        if(!error)
        {
            console.log("Added a new food item!!");
        }
        else{
            console.log("Error"+error);
        }
    })


});
