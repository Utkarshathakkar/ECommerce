const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();
const authController=require("./router/auth.js")
const app=express();

app.use(cors());
app.use(express.json({limit:"20mb"}));
const port=process.env.PORT;

app.use(authController);
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/utkarshEcommerce")
.then(() => console.log("Connect to Databse"))
.catch((err) => console.log(err));



app.get("/",(req,res)=>{
    res.send("server is started")
})



app.listen(port,()=>{
    console.log("server started at port no 8000");
})