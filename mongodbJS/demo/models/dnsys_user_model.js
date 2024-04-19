const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "role"
      }
    ]
})

module.exports = mongoose.model('dnsys_user',dataSchema)