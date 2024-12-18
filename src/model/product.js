// import mongoose from "mongoose";
const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  },
  quantity:{
    type:Number,
    required:true,
  }, 
  manufacturedDate:{
    type: Date,
    default:Date.now,
  }
},{
  timestamps:{
    createdAt: 'created_at'
  }
});

const Product = mongoose.model('Product', ProductsSchema);
module.exports = Product;