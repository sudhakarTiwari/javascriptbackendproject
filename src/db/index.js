import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${ process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`connected to mongodb url', ${ process.env.MONGODB_URI }, ${ connectionInstance.connection.host }`);
    
    } catch (error) {
        console.log('mongodb connection error', error);
    }
}

export default connectDB;