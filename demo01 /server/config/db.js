const mongoose = require('mongoose')

const MONGODBURI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(MONGODBURI)
        console.log(`Database Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB