var express = require('express');
var router = express.Router();


router.get('/',function(req,res){

    var foodInfo = new foodInfo({

        "food_name":"String",
        "no_of_serving":Number,
        "serving_size":Number,
        "carbs":Number,
        "fat":Number,
        "protein":Number,
        "calories":Number,
        "cholestrol":Number,
        "sodium":Number,
        "vitamin":Number,
        "calcium":Number,
        "iron":Number,
        "is_favourite":Boolean,
        "is_active":Boolean,
        "ingredient":{
            "ing1": Number,
            "ing2":Number
        }
        

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