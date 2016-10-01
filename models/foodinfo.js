var mongoose = require('mongoose');

//schema
var foodSchema = new mongoose.Schema({
	"food_name":String,
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

module.exports = mongoose.model('foodDetails',foodSchema);