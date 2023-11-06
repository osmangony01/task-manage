const Task = require('../models/taskModel');



const addTask = async (req, res) => {

    const saveTask = req.body;

    try {
        const result = await Task.create(saveTask);
        //res.status(200).send(result);
        res.status(201).json({
            ok: true,
            message: 'Course created',
        })
    }
    catch (error) {
        //res.status(500).send(error.message);
        res.status(500).json({
            ok: false,
            message: 'Failed to create course'
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
    //console.log(query)
    try {
        const result = await Task.deleteOne(query);
        //res.status(200).send(result);
        res.status(201).json({
            ok: true,
            message: 'Deleted successfully',
        })
    }
    catch (error) {
        //res.status(500).send(error.message);
        res.status(201).json({
            ok: false,
            message: 'Failed to deleted',
        })
    }
}

const updateTask = async (req, res) => {

    // const id = req.body.id;
    // const feedback = req.body.fk;
    // //console.log(id, feedback);
    // const query = { _id: id };
    // const updateDoc = { feedbacks: feedback };

    const { id, taskTitle, dueDate, priority, description } = req.body;
    //console.log(req.body);

    const query = { _id: id };

    // const updateDoc = {
    //     $set: {
    //         taskTitle,
    //         dueDate,
    //         priority,
    //         description,
    //     }
    // }
    
    const updateDoc = { };


    try {
        const result = await Task.findByIdAndUpdate(query, updateDoc);
        //res.status(200).send(result);
        res.status(201).json({
            ok: true,
            message: 'Feedback updated',
          })
    }
    catch (error) {
        // res.status(500).send(error.message);
        res.status(500).json({
            ok: false,
            message: 'Failed to feedback',
          })
    }
}

module.exports = { addTask, getAllTask, deleteTask, updateTask }