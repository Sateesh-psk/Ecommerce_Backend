//import express  module
const express=require('express')
//create router instance
let router = express.Router()
//import cartApi
let cartApi=require('../apis/cartApi')
//fetch cart items
router.get('/fetchCart',cartApi.fetch_cart)
//insert new cart item
router.post('/addToCart',cartApi.insert_cart)
//update cart items
router.put('/updateCart',cartApi.update_cart)
//delete cart item
router.post('/removeFromCart',cartApi.delete_cart)

module.exports = router