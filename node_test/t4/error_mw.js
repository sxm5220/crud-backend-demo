const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    throw new Error('服务器内发生了错误！')
    res.send('Home page.')
})

//错误中间件（需要注册在所有路由之后使用）
app.use((err,req,res,next)=>{
    console.log('发生了错误！')
    res.send('Error:' + err.message)
    // next()
})

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})