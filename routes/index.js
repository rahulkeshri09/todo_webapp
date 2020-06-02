// know which file to be excuted and routing in that file
const express=require('express');
const router=express.Router();  
const homeController=require('../controller/home_conroller');  //get path of home_controller.js
router.get('/',homeController.home); //routes that home_controller.js
module.exports=router;