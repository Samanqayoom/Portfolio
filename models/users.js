const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id:{type:String,required:true ,unique: true, 
    default: () => uuidv4()},
  email: { type: String, required: true, unique: true },
  firstName: { type: String,required: true},
  lastName: { type: String,required: true},
  intro: { type: String, default: '' },
  about: { type: String, default: '' },
  professional: { type: String, default: '' },
  password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
