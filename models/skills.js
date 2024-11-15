const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  id:{type:String,required:true},
  skillName: { type: String, required: true, unique: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  experienceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'experience', 
    required: true
  }
});

module.exports = mongoose.model('skills', skillSchema);