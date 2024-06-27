
import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'
import express from 'express'

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MongoDb connected !! DB HOST: ${connectionInstance.connection.host}`) // tells the host at which i connect
    } catch (error) {
        console.log("MONGODB connection error ", error)
        process.exit(1)  // 0 -> success  non-zero -> some error
    }
}

export default connectDB;