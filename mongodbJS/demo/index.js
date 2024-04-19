require('dotenv').config()

const routes = require('./routes/routes')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error',(error)=>{
    console.log(`Error->>${error}`)
})

database.once('connected',()=>{
    console.log('Database Connected')
})

var corsOptions = {
    origin:"http://localhost:8081"
}

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',routes)

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get("/",(req,res)=>{
    res.json({message:"Welcome to bezkoder application."})
})

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})