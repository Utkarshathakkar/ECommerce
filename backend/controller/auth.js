const {User} =require("../models/User.js");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const saltround=10;
const signup=  async(req,res)=>{
   const {email}=req.body;
      const user=  User.findOne({email:email});
      if(user.email==email){
        res.send({message:"Email id is already present",alert:false})
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

const login =async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
  try{
     const result= await User.findOne({email:email})
   if(!result){
    return res.status(404).send("Email not found please signup",alert(false))
   }
  if(await bcrypt.compare(password,result.password)){

   const dataSend = {
      email: result.email,
      firstname:result.firstname,
      lastname:result.lastname
    };
    console.log(dataSend);
    res.send({
      message: "Login is successfully",
      alert: true,
      data: dataSend,
    });
   }else{
      res.send({
         message: "Email is not available, please sign up",
         alert: false,
       });
   }

  }catch(e){
     res.status(400).json("some error occured")
  }

}

module.exports={signup,login};