const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({       // create schema i.e like a template in database 
    description:{                        
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});
const Task=mongoose.model('tasks',taskSchema);
module.exports=Task;