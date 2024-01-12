const router = require('express').Router();
const createError = require('http-errors');
const tasks = require('../../../models/TaskModel');
const gettasks = async (req,res,next)=>{
 try{

  const result = await  tasks.find();
  res.send(result);
 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
}

module.exports = gettasks;

