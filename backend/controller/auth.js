const {User} =require("../models/User.js");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const saltround=10;
const signup=  async(req,res)=>{
   const {email}=req.body;
      const user=  User.findOne({email:email});
      if(user.email==email){
        res.json("Email id is already present")
      }

    
     
     bcrypt.hash(req.body.password,saltround,async (err,hash)=>{
      try{
     const User1=new User({
        ...req.body,
        password:hash
     });
      const newUser=await User1.save();
       
        res.status(200).send({ message: "Successfully sign up", alert: true,newUser });
        }catch(e){
            res.json(e)
        }
        })  
}

const login =async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
  try{
   const user= await User.findOne({email:email})
   if(!user){
    return res.status(404).send("Email not found please signup",alert(false))
   }
  if(await bcrypt.compare(password,user.password)){

    
        const token= await jwt.sign({id:user._id},process.env.SECRET);
        console.log(token);
        user=user.toObject();
        user=user.token;
        console.log(user)
  
        res.cookie("jwt",token,{
        httpOnly:true,
        expires:new Date(Date.now()+ 100000)
       } ).status(200).json({details:{...otherdetails},message: "Login is successfully", alert: true,});
    }
    
    else{
     res.send("Invalid login details");
    }
   
   
  }catch(e){
     res.status(400).json("invalid login details")
  }

}

module.exports={signup,login};