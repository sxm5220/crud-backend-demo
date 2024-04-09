import express from 'express'
import dotenv from 'dotenv'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
// import mongoose from 'mongoose'
import router from './router'
import {connectDB} from './db/connectdb'

const app = express()

dotenv.config()

app.use(cors({
    credentials: true,
}))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/api/', router())

const server = http.createServer(app)
const PORT =  process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
})

connectDB()