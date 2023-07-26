const express=require("express");

const mongoose=require("mongoose");
const {ProductModel}=require("../models/Product.js");

async function newproduct(req,res){
    const newproduct=new ProductModel(req.body);
    const data= await newproduct.save();
    res.status(200).json({message : "Upload successfully"})
}


async function product(req,res){
    const data=await ProductModel.find({})
    res.status(200).send(JSON.stringify(data));
}


module.exports={newproduct,product}