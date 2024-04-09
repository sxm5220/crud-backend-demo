const express = require('express')
const router = express.Router()
const userHander = require('../router_handler/userHander')

//创建用户
router.post('/register',userHander.register)

//登录
router.post('/login',userHander.login)

module.exports = router