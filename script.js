const fs = require('fs');
const express = require("express")
 const app = express();

fs.writeFile('hello.txt',"hello how are you",function(err){
    if(err) console.error(err);
    else console.log(" file created successfully");
})

fs.readFile("hello.txt","utf-8",function(err,data){
    if(err) console.error(err)
    else console.log(data);
})

app.get("/",function(req,res){
    res.send("Hello from express");
})

app.listen(3000)