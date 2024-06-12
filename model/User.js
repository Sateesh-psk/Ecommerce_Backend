//import mongoose
const mongoose=require('mongoose')
//create schema
const userSchema=mongoose.Schema({
  u_id:Number,
  u_addr:String,
  u_name:String,
  u_pwd:String,
  u_u_contact:String,
  u_u_email:String
})

module.exports=mongoose.model('User',userSchema)