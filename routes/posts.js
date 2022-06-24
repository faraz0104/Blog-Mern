import express from "express"
import { User } from "../models/User.js"
import {Post} from "../models/Post.js"

const router=express.Router();

// Create Post

router.post("/",async(req,res)=>{
    const newPost = new Post(req.body)
    try{
      const savePost = await newPost.save()
      res.status(200).json(savePost)
    }catch(err){
        res.status(500).json(err)
    }
})
export default router;