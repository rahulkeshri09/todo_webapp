const express=require('express');  
const port=8000;  
const app=express();
app.use('/',require('./routes')); //any url first go ./routes/index.js
app.set('view engine','ejs'); //set view engine i.e  ejs
app.set('views','./views') 
app.listen(port,function(err){   //start the server
    if(err){
        console.log(`Erorr in running server:${err}`);
        return;
    }
    console.log(`Succefully running server on port:${port}`);
});