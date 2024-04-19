const express = require('express')
const app = express()
//通过express.json()中间件，解析表单中的JSON格式数据
app.use(express.json())
//解析x-www-form-urlencoded 格式数据的内置中间件
app.use(express.urlencoded({extended:false}))

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('Home page.')
})

app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send('Home page.')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})