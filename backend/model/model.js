const express=require("express")
const mongoose=require("mongoose")
const userSchema = require("../schema/schema")


const userInfo=mongoose.model("user",userSchema)

module.exports=userInfo