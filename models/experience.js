const mongoose = require('mongoose');
const experienceSchema= new mongoose.Schema({
  id:{type:String,required:true},
  userId: 
  { type: String,
    ref:"User",
     required: true,
     },
  organizationName:{
    type:String,
    required:true,
  },
  startDate:
   { type: Date, 
    required: true },
  endDate:
    { type: Date, 
     required: true },
});

module.exports = mongoose.model('experience', experienceSchema);