//import modules
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyparser=require('body-parser')
//import url
let url=require('./url')
//create rest object
let app=express()
//set json as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
//connect to mongodb
mongoose.connect(url,{dbName:'mern_capstone'})
  .then(()=>{
    console.log('Connection Success')
  },(errRes)=>{
    console.log('Error in connection:- ',errRes)
  })
//import routes
const productRoutes=require('./routes/productRoutes')
const userRoutes=require('./routes/userRoutes')
const cartRoutes=require('./routes/cartRoutes')
//use routes
app.use("/products", productRoutes)
app.use('/user',userRoutes)
app.use('/cart',cartRoutes)
//create port
let port=8080
//assign port number
app.listen(port,()=>{
  console.log("Server started on port number:- ",port)
})