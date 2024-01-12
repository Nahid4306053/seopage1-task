const { default: mongoose } = require('mongoose');
const createError = require('http-errors');
const Tasks = require('../../../models/TaskModel');
const dotenv = require("dotenv").config()


const UpdateTask = async (req, res, next) => {


  try {
 
   if(req.body.attachments){ 
    const data = await Tasks.findOneAndUpdate({_id:req.params.id},{$push:{'attachments': { $each: req.body.attachments }}})
     res.send(data);
   }
   else{
    next(createError(400, "Please provide all required data"))              
   }
 
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}

module.exports = UpdateTask;
