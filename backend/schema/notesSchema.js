const mongoose =require("mongoose")

const noteSchema=mongoose.Schema({
    title:String,
    content:String,
    subject:String,
    notesId:String,
})

module.exports=noteSchema