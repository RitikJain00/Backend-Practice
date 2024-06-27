import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limmit: "16kb"}))  // form data json data
app.use(express.urlencoded({extended: true, limit: "16kb"}))  // url data
app.use(express.static("public"))
app.use(cookieParser())

const app = express()

export { app }