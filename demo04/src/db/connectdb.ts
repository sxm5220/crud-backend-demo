import mongoose from 'mongoose'
import logger from '../utils/logger'

const MONGODBURI = process.env.MONGODB_URI

 const connectDB = async () => {
    try {
        /*mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(MONGODBURI)*/
        const MONGO_URL = process.env.MONGODB_URI ?? ""
        mongoose.Promise = Promise
        const conn = await mongoose.connect(MONGO_URL)
        mongoose.connection.on('error', (error: Error) => console.log(error));
        logger.info(`Database Connected: ${conn.connection.host}`)
    } catch (error) {
        logger.error(error)
    }
}

export default connectDB