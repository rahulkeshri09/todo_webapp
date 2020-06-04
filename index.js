// entry point of project

const express=require('express');  
const port=8000;    //runnin on that port
const app=express();   //app use for fire the express
app.use(express.urlencoded());
app.use('/',require('./routes')); //any url first go ./routes/index.js
app.set('view engine','ejs'); //set view engine i.e  ejs
app.set('views','./views') ;
app.use(express.static('assets'));   //mw for use static file
app.listen(port,function(err){   //start the server
    if(err){
        console.log(`Erorr in running server :${err}`);
        return;
    }
    console.log(`Succefully running server on port:${port}`);
});