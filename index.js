const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function(req,res){
  var N1 = Number(req.body.no1);
  var N2 = Number(req.body.no2);
  var result = N1 + N2;
  res.send(N1 +" + "+N2 +" = "+result);
})

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(8000,function(){
  console.log("server started at port 8000");
});