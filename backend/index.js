const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const dotenv=require("dotenv")
const dbConnection = require("./database/database")
const router = require("./router/routerapi")
dotenv.config({path:"./.env"})
const port=process.env.PORT || 3000
const app=express()
app.use(cors())
app.use(express.json())

app.use("/",router)


dbConnection()


app.listen(port,()=>{
    console.log("server is running" + port );
})