//import mongoose
const mongoose = require('mongoose')
//create schema
let cartSchema = mongoose.Schema({
  p_id:Number,
  p_img:String,
  p_cost:Number,
  u_name:String,
  p_count:Number
})

module.exports = mongoose.model('Cart',cartSchema)