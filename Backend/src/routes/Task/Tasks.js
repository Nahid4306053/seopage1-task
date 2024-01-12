
const UpdateTask = require("../../controllers/v1/tasks/UpdateTask");
const gettasks = require("../../controllers/v1/tasks/getTask");

const tasks = require("express").Router()

tasks.get("/all"  , gettasks);
tasks.patch("/attach/:id"  , UpdateTask);


module.exports = tasks;   

 