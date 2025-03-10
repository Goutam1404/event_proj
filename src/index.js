// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
// import mongoose from "mongoose";
import connectDB from "./db/index.js";
import express from express;
dotenv.config({
  path: "./env",
});

connectDB()
.then(()=>{
     app.on('error',(error)=>{
          console.log("Error",error);
     })
     
     app.listen(process.env.PORT || 3000,()=>{
          console.log(`server is running at port ${process.env.port || 3000}`);
     })
})
.catch((error)=>{
     console.log(`Mongo db connection failed:${error}`);
     
})
