
const route = require('express').Router();
const { addTask, getAllTask, deleteTask, updateTask, searchTask } = require('../controllers/taskController');
const { addUser } = require('../controllers/userController');


// this route handle add user in database
route.post('/add-user', addUser);


/*---------- Task handle using REST operation -----------*/

route.post("/task", addTask);

route.get("/tasks", getAllTask); 

route.delete("/task/:id", deleteTask);

route.patch("/task", updateTask);

/* --------------------- End ----------------------------*/


// searching task route
route.get('/task-search', searchTask);


module.exports = route;