const express=require('express');
const bodyparser=require('body-parser');
const request=require('request');
const https=require('https');

const app=express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})
app.post("/",function(req,res){
 var firstname=req.body.fName;
 var LastName=req.body.LName;
 var Email=req.body.Email;
 console.log(firstname,LastName,Email);
})

app.listen(3000,function(req,res){
    console.log("Server is running at port 3000");
})
//API KEY
//07b8388c1bf785d57482a29c3efb1e60-us7

//ListID
//eaef563ab8