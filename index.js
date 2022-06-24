

import dotenv from "dotenv"
import express from "express";
import mongoose from 'mongoose';
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRouter from "./routes/posts.js"



const app = express();

dotenv.config()
app.use(express.json())

app.use(express.json())
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true
}).then(console.log("connected to DB"))
.catch((error)=> console.log("error occured", error))

app.use("/api/auth", authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/posts",postRouter)



app.use("/",(req,res)=>{
    console.log("hello this is home")
})


app.listen(4000,()=>{
    console.log("server started")
})