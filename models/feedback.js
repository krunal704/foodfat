var mongoose = require('mongoose');

//schema
var Feedback = new mongoose.Schema({
	"user_name":String,
	"feedback_content":String,
  "user_mailid":String

})

module.exports = mongoose.model('fst_feedbacks',Feedback);
