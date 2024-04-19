const express = require('express')
const router = require('./router')
//中间件
const mw1 = function(req,res,next){
    console.log('this is mw1!!')
    next()
}

const mw2 = function(req,res,next){
    console.log('this is mw2!!')
    next()
}

const app = express()
//挂载统一的访问前缀，添加 "/api"
// app.use("/api",router)
// app.use(mw)
// app.use((req,res,next)=>{
//     const time = Date.now()
//     req.startTime = time
//     next()
// })

//局部中间件
app.get('/user',[mw1,mw2],(req,res)=>{
    res.send('Get User page.')
})

app.post('/user',[mw1,mw2],(req,res)=>{
    res.send('Post User page.')
})

app.get('/',(req,res)=>{
    res.send('Home page.'+req.startTime)
})


app.listen(80,()=>{
    console.log('http://127.0.0.1')
})
