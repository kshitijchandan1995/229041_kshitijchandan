const express=require('express')
const app=express()

app.get('/detail',function(req,resp){
    resp.sendFile('./public/Detail.html',{root:__dirname})
})
app.get('/course',function(req,resp){
    resp.sendFile('./public/Course.html',{root:__dirname})
})
app.listen(8080,function(){
    console.log('Server is start on port no 8080')
})