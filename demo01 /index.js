const express = require('express')
const dotenv = require('dotenv')
const userRouter = require('./routes/userRouter.js')
const auth = require('./middlewares/authorization.js')
const productRouter = require('./routes/productRouter.js')
const app = express()

//将环境变量从.env文件加载到process.env中
dotenv.config()

app.use(express.json())
//解析客户端发送的URL编码格式的请求体数据，将其转换为JavaScript对象，并将其赋值给req.body
app.use(express.urlencoded({ extended: false }))
//routes
app.use("/api/users", userRouter)
app.use("/api/*",auth.verifyToken) //注册token验证中间件
app.use("/api/products", productRouter)

const connectDB = require('./server/config/db')

const PORT =  process.env.PORT || 5000

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})