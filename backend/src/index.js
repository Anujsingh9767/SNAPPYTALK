// const express =require("express")
import express from "express"
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"

const app =express()
app.use(express.json())

dotenv.config()

const PORT =process.env.PORT;

app.use("/api/auth",authRoutes)
//extract the json data

const port =5001;
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT} `)
    connectDB();
})