import express from "express"

import {Category} from "../models/Category.js"

const router=express.Router();
// create
router.post("/",async (req,res)=>{
    const newCat = new Category(req.body)
    try{
           const saveCat = await newCat.save()
           res.status(200).json(saveCat)
    }catch(err){
        res.status(500).json(err)
    }
})
// get
router.get("/", async (req, res) => {
    try {
      const cats = await Category.find();
      res.status(200).json(cats);
    } catch (err) {
      res.status(500).json(err);
    }
  });
export default router