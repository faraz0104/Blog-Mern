import mongoose from "mongoose"
const Schema= mongoose.Schema

const CategorySchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    
});

export const Category=mongoose.model("Category",CategorySchema)