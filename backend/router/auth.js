const express=require("express");
 const {signup,login}=require("../controller/auth.js");
 const {newproduct,product}=require("../controller/NewProduct.js")

const router=express.Router();


router.post("/signup", signup);
router.post("/login",login);
router.post("/newproduct",newproduct);
router.get("/product",product);

module.exports=router;