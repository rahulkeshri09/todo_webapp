//it is master controler
const Task=require('../models/tasks')
module.exports.home=function(req,res){  //rendering home.ejs file
    Task.find({},function(err,tasks){
        if(err){
            console.log(`Error in fetching db:${err}`);
            return;
        }
        return res.render('home',{
            task_list:tasks         // var task_list  store all document of collection and send to homepage
        });
    });
}