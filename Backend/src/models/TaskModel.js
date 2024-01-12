const mongoose = require('mongoose');

// Define the task schema
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    maxlength: 100
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  attachments: {
    type: Array
  },
  status: {
    type: String,
    enum: ['incomplete', 'to-do', 'doing', 'under review', 'completed'],
    default: 'to-do'
  }
});

// Create the Task model
const tasks = new mongoose.model('tasks', taskSchema);

module.exports = tasks;
