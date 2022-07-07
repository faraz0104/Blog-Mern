

import dotenv from "dotenv"
import express from "express";
import mongoose from 'mongoose';
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRouter from "./routes/posts.js"
import catRouter from "./routes/categories.js"
import multer from "multer"
import path from "path"
import {fileURLToPath} from "url"


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();

dotenv.config()
app.use(express.json())// WE can send any json file object

app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(express.json())
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true
}).then(console.log("connected to DB"))
.catch((error)=> console.log("error occured", error))

// creating storage for file upload
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")

    },filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
});

//upload a

const upload = multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file uploaded")
})

app.use("/api/auth", authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/posts",postRouter)
app.use("/api/categories",catRouter)



app.use("/",(req,res)=>{
    console.log("hello this is home")
})


app.listen(4000,()=>{
    console.log("server started")
})