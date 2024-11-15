const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  id:{type:String,required:true},
  skillId: { 
     type: mongoose.Schema.Types.ObjectId,
    ref: 'skills', 
    required: true
   },
  tag: { type: String, required: true },
});

module.exports = mongoose.model('category', categorySchema);