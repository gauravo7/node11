const express = require('express')
const app = express()

app.get("/",function(req,res){
    res.json({
        status:200,success:true,
        message:"welcome to Server"
    })
})

app.listen(3000,function(){
    console.log("Server Running 3000")
})