const express = require('express')
const router = require('./router')

const app = express()
app.use(express.urlencoded({extended : false}))
app.use('/api',router)

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})
