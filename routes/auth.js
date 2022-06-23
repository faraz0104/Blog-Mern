import express from "express"
import { User } from "../models/User.js"
import bcrypt from "bcrypt"

const router=express.Router();

//Register route

router.post("/register",async(req,res)=>{
    try{

        const salt= await bcrypt.genSalt(10)
        const hasPas=await bcrypt.hash(req.body.password,salt)
        const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            password:hasPas,
        });

        const user= await newUser.save()
        res.status(200).json(user)

    }catch(err){
       res.status(500).json(err)
    }
});

//LOgin

router.post("/login",async(req,res)=>{
    try{
        //finding user
         const user =await User.findOne({username:req.body.username})
         //if user not found
         !user && res.status(400).json("User not found")

         //if user found validate password with password in database
         const validate = await bcrypt.compare(req.body.password,user.password)
         !validate && res.status(400).json("Wrongd Password")
           
         const {password,...others} = user._doc// we dont want password from datbase but other details
         res.status(200).json(others)

    }catch(err){
        res.status(500).json(err)
    }
})

export default router;