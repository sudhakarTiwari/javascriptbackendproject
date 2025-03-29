import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';
// require('dotenv').config({
//     path: './env'
// });
dotenv.config({
    path: '.env'
});

const app = express();

connectDB()
    .then((res) => {
        app.listen(process.env.PORT, () => { 
            console.log(`server is running on port ${process.env.PORT}`);
        })
        app.on('error', (error) => {
            console.log(`error from mongoDB is ${error}`);
        })
    })
    .catch((error) => {
    console.log(`error from DB is ${error}`)
})

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log('connected to mongodb');

//         app.listen(process.env.PORT, () => {
//             console.log(`server is running on port ${process.env.PORT}`);
//         })
//     }
//     catch (error) {
//         console.log(error);
//     }
    
// })()
