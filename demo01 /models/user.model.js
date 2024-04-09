const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true,
        unique: true,
        set(val){
            //通过bcryptjs对密码加密返回值，val：返回值；10：密码强度
            return require('bcryptjs').hashSync(val,10)
        }
    }
})

const User = mongoose.model('User',UserSchema)
module.exports = User