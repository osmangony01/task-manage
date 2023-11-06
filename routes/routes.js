
const route = require('express').Router();
const { addTask, getAllTask, deleteTask, updateTask } = require('../controllers/taskController');
const { addUser } = require('../controllers/userController');


// this route handle add user in database
route.get('/add-user', addUser);


/*---------- Task handle using REST operation -----------*/

route.post("/task", addTask);

route.get("/tasks", getAllTask); 

route.delete("/task/:id", deleteTask)

route.patch("task", updateTask) 

/* --------------------- End ----------------------------*/



module.exports = route;