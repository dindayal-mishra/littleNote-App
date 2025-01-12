const express=require("express")
const mongoose=require("mongoose")

const dbConnection=async(req,res)=>{
    try {
        const connection =await mongoose.connect(process.env.MONGODB_URL)
       if(connection){
        console.log("database connected successfully")
       }
    } catch (error) {
       console.log(error);
       
    }
}

module.exports=dbConnection