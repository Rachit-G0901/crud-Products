// import mongoose from "mongoose";
const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/productCRUD"
const connectDatabase = async () =>{
  try {
    await mongoose.connect(uri);
    console.log("connected");
  } catch (error) {
    console.log(error)    
  }
}
module.exports = connectDatabase;