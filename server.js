const express=require('express')
const app=express()
app.get('/',function(req,res){
    res.send("WELCOME TO DELITTES ");
   
    
})
app.listen(9090,function(req,res){
console.log("delittes");
});
