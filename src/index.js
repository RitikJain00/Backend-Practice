// require('dotenv').config({path: './env'})

import dotenv from "dotenv"

// import mongoose from 'mongoose'
import { DB_NAME } from './constants.js'
// import express from 'express'

import connectDB from "./database/index.js"

dotenv.config({
    path: './env'
})


connectDB()
.then( () =>{           // promise 

    const port = process.env.PORT || 8000;
    app.listen(port, () =>{
        console.log(`Server is running at ${port}`)
    })
})
.catch((err) =>{
    console.log("Mongo Db connection failed !!!", err);
})

// const app = express()

// ( async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", (error)=>{
//         console.log("ERROR: ",error)
//         throw error
//        })

//        app.listen(process.env.PORT , () =>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//        })
//     } catch (error) {
//        console.error("ERROR:", error) 
//        throw error
//     }
// })()

// function connrctDB(){

// } 
// connectDB();


