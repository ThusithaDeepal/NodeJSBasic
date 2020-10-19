var express=require('express');
var app=express();
var router=express.Router();

app.use("/firstroute",router);


router.get("/",function(req,res){

    res.end("first route");
})


router.get("/secondroute",function(req,res){

    res.end("firstroute/secondroute");
})


app.listen("8080",function(req,res){
console.log("server running")
})