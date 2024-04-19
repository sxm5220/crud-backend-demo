const express = require('express')
const app = express()
app.get('/user',(req,res)=>{
res.send({name:"Symon",age:20,gender:'男'})
})
app.post('/user',(req,res)=>{
    res.send('请求成功！！')
})
app.get('/login',(req,res)=>{
    res.send(req.query)
})
//:id、:name是动态参数
app.get('/user/:id/:name',(req,res)=>{
    res.send(req.params)
})
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})