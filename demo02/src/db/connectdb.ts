import mongoose from 'mongoose'

const MONGODBURI = process.env.MONGODB_URI

export const connectDB = async () => {
    try {
        /*mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(MONGODBURI)*/
        const MONGO_URL = process.env.MONGODB_URI
        mongoose.Promise = Promise
        const conn = await mongoose.connect(MONGO_URL)
        mongoose.connection.on('error', (error: Error) => console.log(error));
        console.log(`Database Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}