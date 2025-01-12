const express=require("express")
const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    username:String,
    email:String,
    hashpassword:String
})



module.exports=userSchema