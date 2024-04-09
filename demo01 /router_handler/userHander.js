const userService = require('../services/userService.js')
const auth = require('../middlewares/authorization.js')
const bcryptjs = require('bcryptjs')

//注册用户
const register = async (req, res) => {
    try {
        const user = await userService.registerUserService(req)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//登录
const login = async (req, res) => {
    try {
        const user = await userService.loginUserService(req)
        console.log(`user::${user}`)
        if (!user) return res.send({ message: 'no found！' })
        //输入的密码和数据库中的密码做对比验证，如果一样说明输入的密码正确登录成功
        const isCompareRes = bcryptjs.compareSync(req.body.password, user.password)
        let token = auth.generateToken({ _id: user._id, username: user.username })
        console.log(`token:${token} isCompareRes::${isCompareRes}`)
        if (isCompareRes) {
            res.status(200).json({ token: token, data: user, message: 'login successful!' })
        } else {
            res.status(500).json({ message: 'login fail!' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    register,
    login
}