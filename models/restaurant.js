var mongoose = require('mongoose');

//schema
var restaurantSchema = new mongoose.Schema({
	"rest_name":String,
	"rest_address":String,
	"rest_loc":Array,
	"phoneno":String,
	"rest_email":String,
	"opening_status":String,
	"owner_mail_id":String,
	"restraunt_website":String,
	"rest_time":String,
	"rest_city":String,
	"rest_menu":{
	"food_id": Number,
	"food_price":Number
	},
	"zipcode":Number,
	"country_id":Number,
	"rating":Number,
	"rest_food_type":String

})

module.exports = mongoose.model('fst_restaurant_info',restaurantSchema);