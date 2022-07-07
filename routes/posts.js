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

// Update post 

// first we compare username if they are same we will update otherwise we will not
 router.put("/:id",async (req,res)=>{
    try{
        const post =await Post.findById(req.params.id)// find we will find the post
        if(post.username === req.body.username){
            try{
                const updatePost =  await Post.findByIdAndUpdate(
                    req.params.id,{
                        $set:req.body
                    },
                    {new:true}
                );
                res.status(200).json(updatePost)
            }catch(err){
                res.status(500).json(err)
            }
        }else{
            res.status(401).json("you can update")
        }
    }catch(err){
        res.status(500).json(err)
    }
 })
 //Delete
router.delete("/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username){
            try{
                await post.delete()
                res.status(200).json("Post deleted")
            } catch(err){
                res.status(500).json(err);
            }
        }else{
            res.status(401).json("you can't delete this account")
        }
    }catch(err){
        res.status(500).json(err);
    }
})

// get post 
router.get("/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
    res.status(200).json(post)
    }catch(err){
        res.status(500).json(err)
    }
})

// Get all
router.get("/",async(req,res)=>{
    const username = req.query.user;
    const caty = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await Post.find({username})
        }else if(caty){
            posts= await Post.find({categories:{
                $in:[caty]
            }})
        }else{
            posts = await Post.find()
        }
        res.status(200).json(posts)
     
    }catch(err){
        res.status(500).json(err)
    }
})
export default router;