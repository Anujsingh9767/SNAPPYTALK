// const express =require("express")
import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"

import {app,server} from "./lib/socket.js"





dotenv.config()

const PORT =process.env.PORT;


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))





app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
//extract the json data
const port =5001;
server.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT} `)
    connectDB();
})