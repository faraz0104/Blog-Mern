

import dotenv from "dotenv"
import express from "express";
import mongoose from 'mongoose';
import authRoutes from "./routes/auth.js"


const app = express();

dotenv.config()
app.use(express.json())

app.use(express.json())
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true
}).then(console.log("connected to DB"))
.catch((error)=> console.log("error occured", error))

app.use("/api/auth", authRoutes)

app.use("/",(req,res)=>{
    console.log("hello this is home")
})


app.listen(4000,()=>{
    console.log("server started")
})