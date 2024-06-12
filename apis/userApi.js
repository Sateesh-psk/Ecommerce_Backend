//import db schema
let User = require('../model/User')
let token = require('../token/token')
//login authentication
const login = async (req,res)=>{
  let uname=req.body.u_name
  let upwd=req.body.u_pwd
  let obj=req.body
  try{
    const users = await User.find({u_name:uname,u_pwd:upwd})
    if(users.length>0){
      console.log('Auth Success')
      let myToken=token(obj,new Date().toString())
      res.json({'auth':'success','token':myToken})
    }else{
      console.log('Auth Failed')
      res.json({'auth':'failed'})
    }
  }catch(error){
    console.log('Fetch error:- ',error)
    res.json({'message':error})
  }
}
//insert new user
const insert_user = async (req,res)=>{
  const user = new User({
    u_id:req.body.u_id,
    u_addr:req.body.u_addr,
    u_name:req.body.u_name,
    u_pwd:req.body.u_pwd,
    u_u_contact:req.body.u_u_contact,
    u_u_email:req.body.u_u_email
  })
  try {
    const users= await User.find({u_name:req.body.u_name})
    if(users.length>0){
      console.log('Account not created')
      res.json({'message':'Please select unique username'})
    }else{
      const savedUser = await user.save()
      console.log('Account Created')
      res.send(savedUser)
    }
  }catch(error){
    res.status(404).send(error)
  }
}
//update user details
const update_user = async (req,res)=>{
  let u_id = req.body.u_id
  const user = {
    u_addr:req.body.u_addr,
    u_name:req.body.u_name,
    u_pwd:req.body.u_pwd,
    u_u_contact:req.body.u_u_contact,
    u_u_email:req.body.u_u_email
  }
  try {
    const updatedUser = await User.updateOne({u_id},user)
    if(updatedUser.updatedCount!=0){
      console.log('Details updated',updatedUser)
      res.send({'update':'success'})
    }else{
      console.log('Details not updated')
      res.send({ 'update': 'User Not Found' })
    }
  }catch(error){
    res.status(404).send(error)
  }
}
//delete a user
const delete_user = async (req,res)=>{
  let u_id = req.body.u_id
  try {
    const deletedUser = await User.deleteOne({u_id})
    if(deletedUser.deletedCount!=0){
      console.log('Account deleted',deletedUser)
      res.send({'delete':'success'})
    }else{
      console.log('Account Not deleted')
      res.send({ 'delete': 'User Not Found' })
    }
  }catch(error){
    res.status(404).send(error)
  }
}

module.exports = {
  insert_user,
  update_user,
  delete_user,
  login
}