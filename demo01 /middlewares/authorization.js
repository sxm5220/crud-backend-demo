const jwt = require('jsonwebtoken')
const { secret, expiresIn } = require('../server/config/config')

//生产token
const generateToken = (payload) => {
    const token = "Bearer " +
        jwt.sign(payload, secret, {
            expiresIn: expiresIn
        })
    return token
}

//验证token
const verifyToken = (req, res, next) => {
    // console.log(`req.headers.authorization::${req.headers.authorization}`);
    const token = req.headers.authorization.split(" ")[1]
    // console.log('token::',token);
    if (!token) return res.status(500).json({ code: '2003', message: "token 缺失！", data: null })
    //校验token
    jwt.verify(token, secret, async (error, data) => {
        if (error) return res.status(500).json({ code: '2004', message: "token已过期，校验失败！", data: null })
        // console.log('data:', data);
        //保存用户信息
        req.user = data
        //token校验成功
        next()
    })
}

module.exports = {
    generateToken,
    verifyToken
}
