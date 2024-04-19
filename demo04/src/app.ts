import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connectdb"
import logger from "./utils/logger"
import routes from "./routes"

dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000
app.listen(PORT, async ()=>{
    logger.info(`App is running at http://localhost:${PORT}`)
    await connectDB()
    routes(app)
})


