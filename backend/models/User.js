const mongoose=require("mongoose");
const validator=require("validator");


const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique:true
    },
    lastname:{
       type:String,
       required:true,
       unique:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
    
    
   
})

/*userSchema.methods.generateauthtoken=async function (){
    try{
        const token=jwt.sign({_id:this._id},process.env.SECRET);
        console.log(token);
        this.tokens=this.tokens.concate({token:token })
        return token;
    }catch(err){
             res.send(err);console.log(err);

    }
}
*/
const User= mongoose.model("User",userSchema);

module.exports={User};