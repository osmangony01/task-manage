const express = require('express');
const cors = require('cors');
require('./config/db');
const taskRouter = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(taskRouter);


app.get('/', (req, res) => {
    res.send("Server is running ...")
});


module.exports = app;

