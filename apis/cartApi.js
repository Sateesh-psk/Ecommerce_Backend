//import db schema
let Cart = require('../model/Cart')
//fetch cart details
let fetch_cart =  async (req,res)=>{
  p_id=req.body.p_id,
  u_name=req.body.u_name
  try{
    let cartAll = await Cart.find({p_id:p_id,u_name:u_name})
    console.log('Cart Data Sent')
    res.send(cartAll)
  }catch(error){
    console.log('Cart Fetch Error:- ',error)
    res.json({'message':error})
  }
}
//insert a new item into cart
let insert_cart =  async (req,res)=>{
  let cart = new Cart({
    p_id:req.body.p_id,
    p_img:req.body.p_img,
    p_cost:req.body.p_cost,
    u_name:req.body.u_name,
    p_count:req.body.p_count
  })
  try{
    let savedCart = await cart.save()
    console.log('Item added to Cart')
    res.send(savedCart)
  }catch(error){
    res.status(400).send(error)
  }
}
//update items in cart
let update_cart = async (req,res)=>{
  let p_id=req.body.p_id
  let u_name=req.body.u_name
  let cart = {
    p_img:req.body.p_img,
    p_cost:req.body.p_cost,
    p_count:req.body.p_count
  }
  try{
    let updatedCart = await Cart.updateOne({p_id, u_name}, cart)
    if(updatedCart.modifiedCount!=0){
      console.log('Cart Updated',updatedCart)
      res.send({'update':'success'})
    }else{
      console.log('Cart not updated')
      res.send({ 'update': 'Record Not Found' })
    }
  }catch(error){
    res.status(400).send(error)
  }
}
//deletet items in cart
let delete_cart = async (req,res)=>{
  let p_id=req.body.p_id
  let u_name=req.body.u_name
  try{
    let deletedCart = await Cart.deleteOne({p_id, u_name})
    if(deletedCart.deletedCount!=0){
      console.log('Cart Item Deleted',deletedCart)
      res.send({'delete':'success'})
    }else{
      console.log('Cart Item not deleted')
      res.send({ 'delete': 'Record Not Found' })
    }
  }catch(error){
    res.status(400).send(error)
  }
}
module.exports ={
  insert_cart,
  update_cart,
  delete_cart,
  fetch_cart
}