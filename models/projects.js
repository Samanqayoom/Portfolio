const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {type: String,required: true,trim: true },
  description: {type: String,required: true, trim: true },
  liveUrl:
   {type: String,required: false, // Optional
    validate: {
      validator: function(value) {
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(value); // Valid URL check
      },
      message: 'Invalid URL format'
    }
  },
  githubUrl: {
    type: String,
    required: false, // Optional
    validate: {
      validator: function(value) {
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(value); // Valid URL check
      },
      message: 'Invalid URL format'
    }
  },
  thumbnailUrl: {
    type: String,
    required: false, // Optional
    validate: {
      validator: function(value) {
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(value); // Valid URL check
      },
      message: 'Invalid URL format'
    }
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
    required: true
  },
  experienceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'experience', 
  }
}, { timestamps: true }); 

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
