const express = require('express')
const router = express.Router()
const user_hander = require('./router_handler/user')

router.post('/login', user_hander.login)

router.get('/username', user_hander.getUsername)

router.post('/logout', user_hander.logout)
module.exports = router