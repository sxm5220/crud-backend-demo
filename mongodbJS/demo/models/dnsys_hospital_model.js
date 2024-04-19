const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    clinical_topic:{
        required: true,
        type: Array
    }
})

module.exports = mongoose.model('dnsys_hospital',dataSchema)