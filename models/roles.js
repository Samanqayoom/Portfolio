const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  user_id:{type:String,required:true},
  isAdmin: { type: String, required: true, unique: true },
  
  
});

module.exports = mongoose.model('roles', roleSchema);