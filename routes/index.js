// know which file to be excuted and routing in that file
const express=require('express');
const app=express();   //app use for express functions
const router=express.Router();  
app.use(express.urlencoded());    // parser for req/res in object form
const homeController=require('../controller/home_conroller');  //get path of home_controller.js
const sendDBController=require('../controller/sendDB_controller');  //get path for sendDB_controller
const deleteDBController=require('../controller/deleteDB_controller');  //get path for deleteDB_controller
router.get('/',homeController.home); //routes that home_controller.js
console.log("workint till routes");
router.post('/add-task/',sendDBController.sendDB);   //controller
router.get('/delete-task/',deleteDBController.deleteDB);  //controller
module.exports=router;     