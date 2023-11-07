const { emit } = require('nodemon');
const Task = require('../models/taskModel');


const addTask = async (req, res) => {

    const saveTask = req.body;
    //console.log(saveTask)

    try {
        const result = await Task.create(saveTask);
        res.status(201).json({
            ok: true,
            message: 'Task created',
        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Failed to create task'
        })
    }
}

const getAllTask = async (req, res) => {

    const { email } = req.query;
    //console.log(email);
    if (!email) {
        res.send([]);
    }
    else {
        try {
            const query = { email: email };
            const result = await Task.find(query);
            res.status(200).send(result);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }
}

const deleteTask = async (req, res) => {

    const id = req.params.id;
    const query = { _id: id };
    console.log(query)
    console.log(id)

    try {
        const result = await Task.deleteOne(query);
        res.status(201).json({
            ok: true,
            message: 'Deleted successfully',
        })
    }
    catch (error) {
        res.status(201).json({
            ok: false,
            message: 'Failed to deleted',
        })
    }
}

const updateTask = async (req, res) => {

    const { id, taskTitle, dueDate, priority, description } = req.body;
    //console.log(req.body);

    const query = { _id: id };
    const updateDoc = {taskTitle, dueDate, priority, description  };

    try {
        const result = await Task.findByIdAndUpdate(query, updateDoc);
        res.status(201).json({
            ok: true,
            message: 'Task is updated',
          })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Failed to update task!!',
          })
    } 
}


const searchTask = async (req, res) => {
    const query = req.query;
    //console.log(query);

    const searchQuery = {};

    if (query.hasOwnProperty('taskTitle')) {
        searchQuery.taskTitle = { $regex: query.taskTitle, $options: 'i' };
    }
    if (query.hasOwnProperty('email')) {
        searchQuery.email = query.email;
    }

    try {
        const data = await Task.find(searchQuery);
        console.log(data);
        res.status(200).send(data);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { addTask, getAllTask, deleteTask, updateTask, searchTask }