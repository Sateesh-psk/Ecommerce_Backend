//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import userAPi
let userApi= require('../apis/userApi')
//login
router.post('/login',userApi.login)
//insert user
router.post('/createAccount',userApi.insert_user)
//update user details
router.put('/updateDetails',userApi.update_user)
//delete user account
router.post('/deleteAccount',userApi.delete_user)

module.exports = router