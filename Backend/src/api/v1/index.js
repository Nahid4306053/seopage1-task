const express  = require('express');

const task = require('../../routes/Task/Tasks');
const router = express.Router()

router.get("/",(req,res)=>{
      res.send("listennig api version 01...")              
})
 


//--- /api/v1/Package
router.use("/task" , task);






 

module.exports = router