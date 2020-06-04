const db=require('../config/mongoose');
console.log("inside sendDBcontroller");
const Task=require('../models/tasks');
module.exports.sendDB=function(req,res){
    Task.create({                           // take req and send it to database and save 
        description:req.body.description,
        date:req.body.date,
        category:req.body.category
    },function(err,newTask){
        if(err){
            console.log('error in creating the new task',err);
            return;
        }
        console.log('succefully create newTask',newTask);
        return res.redirect('back');    //redirect to homepage
    });
}