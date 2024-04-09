const User = require('../models/user.model.js')

const registerUserService = (req)=>{
    return User.create({
        username: req.body.username,
        password: req.body.password
    })
}

const loginUserService = (req)=>{
    var username = req.body.username
    //var password = req.body.password
    return User.findOne({username:username})
}

module.exports = {
    registerUserService,
    loginUserService
}