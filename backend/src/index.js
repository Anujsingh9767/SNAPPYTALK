// const express =require("express")
import express from "express"
import authRoutes from "./routes/auth.route.js"

const app =express()

app.use("/api/auth",authRoutes)

const port =5001;
app.listen(port , ()=>{
    console.log(`server is running on port ${port} `)
})