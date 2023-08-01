const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const authController=require("./router/auth.js")
const Stripe = require('stripe')


const app=express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
app.use(express.json({limit:"20mb"}));
const port=process.env.PORT;

app.use(authController);
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/utkarshEcommerce")
.then(() => console.log("Connect to Databse"))
.catch((err) => console.log(err));



app.get("/",(req,res)=>{
    res.send("server is started")
})




const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)

app.post("/create-checkout-session",async(req,res)=>{
     try{
      const params = {
          submit_type :'pay',
          mode : "payment",
          payment_method_types : ['card'],
          billing_address_collection :"auto",
          shipping_options : [{shipping_rate :"shr_1NZurMSGJ63yBwy5u0WFVlls"}],

          line_items : req.body.map((item)=>{
            return{
              price_data :{
                currency :"inr",
                product_data : {
                  name : item.name
                },
                unit_amount : item.price * 100,
              },
              adjustable_quantity : {
                enabled : true,
                minimum : 1,
              },
              quantity : item.qty
            }
          }),

          success_url :"http://localhost:3000/success",
          cancel_url :"http://localhost:3000/cancel",
      } 
      const session = await stripe.checkout.sessions.create(params)
    
      res.status(200).json(session.id)
    
     }
     catch (err){
        res.status(err.statusCode || 500).json(err.message)
     }

})
app.listen(port,()=>{
    console.log("server started at port no 8000");
})