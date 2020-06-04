const db=require('../config/mongoose');  
const Task=require('../models/tasks');  //get path of model(tasks)
module.exports.deleteDB=function(req,res){
    let id=req.query.id;
    Task.findByIdAndDelete(id,function(err){    //find the required document in collection 
        if(err){
            console.log("error in deleting the DB");
            return;
        }
        return res.redirect('back');   //redirect to homepage
    });

}