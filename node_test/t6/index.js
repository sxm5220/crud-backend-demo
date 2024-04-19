const express = require('express')
const router = require('./router')

const app = express()
//生成jwt字符串
const jwt = require('jsonwebtoken')
//客户端发送过来的jwt字符串，解析还原成json对象的包
const expressJWT = require('express-jwt')
//自定义secret密钥
const secretKey = 'dnsys key value'

//将jwt字符串解析还原成JSON对象的中间件
//expressJWT({secret:secretKey}) 解析Token的中间件
//.unless({path:[/^\/api\//]}) 用来指定哪些接口不需要访问权限
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))

//配置session中间件
const session = require('express-session')
app.use(session({
    secret: 'dnsys',
    resave: false,
    saveUninitialized: true
}))
app.use('/api', router)


app.post('/login', (req, res) => {
    const userInfo = req.body
    if (userInfo.username !== 'admin' || userInfo.pwd !== '000000') {
        return res.send({
            status: 404,
            msg: 'login fail!'
        })
    }
    //调用jwt.sign()方法生产JWT字符串，并通过token属性发送给客户端
    //参数1:用户信息对象
    //参数2:加密的密钥
    //参数3:token的有效期
    //注意:不要把密码加密到token字符串中🙅
    const token = jwt.sign({ username: userInfo.username }, secretKey, { expiresIn: '30s' })
    res.send({
        status: 200,
        msg: 'login success!',
        token: token
    })
})

app.get('/admin/getinfo', (req, res) => {
    console.log(req.user)
    res.send({
        status: 200,
        msg: "获取用户信息成功！",
        data: req.user //要发送给客户端的用户信息
    })
})

app.use((err, req, res, next) => {
    //token解析失败导致的错误
    if (err.name === 'UnauthorizedError') {
        return res.send({ status: 401, msg: '无效的Token' })
    }
    res.send({ status: 500, msg: '未知错误！' })
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})