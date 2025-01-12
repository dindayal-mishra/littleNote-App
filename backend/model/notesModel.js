const mongoose=require("mongoose")
const noteSchema = require("../schema/notesSchema")

const note=mongoose.model("note",noteSchema)

module.exports=note