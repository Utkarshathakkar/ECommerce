const mongoose=require("mongoose");

const productschema=new mongoose.Schema({
name:{
   type:String,
   required:true
},
  category:{
    type: String,
    required:true
},
  image: {
    type: String,
    required:true
},
  price:{ 
   type: String,
   required:true
},
  description:{ 
    type: String,
    required:true
},
})

const ProductModel=mongoose.model("ProductModes",productschema);
module.exports={ProductModel}