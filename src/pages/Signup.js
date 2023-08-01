import React from 'react';
import {useState} from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import axios from 'axios';
import {FcGoogle} from "react-icons/fc"




const Signup = () => {
  const [formdata,setformdata]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:""
})

const navigate=useNavigate();

function changehandler(event){
    setformdata((prevData)=>(
     {
        ...prevData,[event.target.name]:event.target.value
      }
     ) )
} 
const [showpassword,setshowpassword]=useState(false);
const[showconfirmpassword,setshowconfirmpassword]=useState(false);

async  function submithandler(event){
  event.preventDefault();
  if(formdata.password!== formdata.confirmpassword){
    toast("password not match");

  }
 const fetchdata= await fetch("http://localhost:8000/signup",{
  method:"post",
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify(formdata)
 });
 const resdata=await fetchdata.json();
 console.log(resdata)
  toast("Account created");
  navigate("/login")
}

return (
<div className="bg-richblack-900 h-screen">
        <Header/>
    <div className="flex justify-center w-full  py-10 ">
      <div className="w-11/12 max-w-[460px] py-10">

     <form onSubmit={submithandler}>
    <div className="flex gap-x-4 mt-[50px]">
      <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">first Name
                <sup className="text-pink-200">*</sup>
            </p>
            <input
            required
            type="text"
            name="firstname"
            onChange={changehandler}
            placeholder="firstname"
            value={formdata.firstname}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
      </label>

  <label className="w-full">
             <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"> last name  <sup className="text-pink-200">*</sup>
            </p>
            <input
            required
            type="text"
            name="lastname"
            onChange={changehandler}
            placeholder="lastname"
            value={formdata.lastname}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
   </label>
</div>
       <div className="mt-[15px]">
          <label className="w-full">
           <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"> email  <sup className="text-pink-200">*</sup>
           </p>
           <input
            required
            type="email"
            name="email"
            onChange={changehandler}
            placeholder="email"
            value={formdata.email}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
          </div>
         <div className=" w-full flex gap-x-4 mt-[15px]">
          <label className=" w-full relative">
             <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"> password  <sup className="text-pink-200">*</sup>
             </p>
            <input
            required
            type={showpassword? ("text"):("password")}
            name="password"
            onChange={changehandler}
            placeholder="Enter Password"
            value={formdata.password}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          <span className="absolute right-3 top-[38px] cursor-pointer" onClick={()=>{
                setshowpassword((prev)=>
                    !prev) } }>
                {showpassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
         </span>
            
         </label>

         <label className=" w-full relative">
             <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"> confirm password <sup className="text-pink-200">*</sup>
            </p>
            <input
            required
            type={showconfirmpassword? ("text"):("password")}
            name="confirmpassword"
            onChange={changehandler}
            placeholder="confirm password"
            value={formdata.confirmpassword}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          <span className="absolute right-3 top-[38px] cursor-pointer" onClick={()=>{
                setshowconfirmpassword((prev)=>
                    !prev) } }>
                {showconfirmpassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
         </span>
            
         </label>

         </div>
      
      <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full">
       Create account
      </button>
      <p className="text-left text-white text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/login"} className="text-yellow-50 underline">
            Login
          </Link>
        </p>

       </form>
                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-richblack-700"></div>
                    <p className="text-richblack-700 font-medium leading[1.375rem]">OR</p>
                    <div className="w-full h-[1px] bg-richblack-700"></div>
                </div>
                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6">
                 <FcGoogle/>
                  Sign up with google

                 </button>
              </div>


       </div>
</div>
)
}

export default Signup;
