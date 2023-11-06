
const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({

    taskTitle: { type: String },
    dueDate: { type: Date },
    priority: { type: String },
    email: { type: String },
    description: { type: String },
    
});

const taskModel = mongoose.model("taskRG", taskSchema);

module.exports = taskModel;