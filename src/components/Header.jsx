import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import logo from "../assets/logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/useSlice";
import { toast } from "react-hot-toast";

 const Header = () => {
   const [shadow,setshadow]=useState(false);
   const dispatch=useDispatch();
   const navigate=useNavigate();

   function handleClick(){
      setshadow(prev=>!prev)
   }
   const userData=useSelector((state)=>state.user);
   const handlelogout=()=>{
       dispatch(logoutRedux);
       toast.success("Logout successfully");
       navigate("/login")
   }
  

const cartItemNumber = useSelector((state)=>state.product.cartItem)

  return (
     <header className="fixed shadow-md w-full h-16 px-2 md:px-4 bg-white">
      
          <div className="flex items-center h-full justify-between">
          <div className="h-20 w-15 py-2" >
            <img src={logo} alt="noimg" className="h-full"/>
          </div>
           <div className="flex items-center gap-4 md:gap-6">
              <nav className="flex gap-4 md:gap-6 texr-base md:text-lg">
                <Link to="/">Home</Link>
                <Link to="/menu/6495e5881cea27111ced3fae">menu</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
              </nav>
              <div className="text-2xl text-slate-500 relative">
                <Link to={"cart"}>
                 <BsCartFill/>
                 </Link>
                 <div className="absolute -top-1 -right-1 text-white bg-blue-600 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">{cartItemNumber.length}</div>
              </div>
               <div className="text-slate-600" onClick={handleClick}>
               <div className="text-3xl cursor-pointer">
                 <HiOutlineUserCircle/>
              </div>
              {
               shadow && (
                  <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                    {userData.email === "utkarshthakkar1223@gmail.com" && (
                    <Link to="/newproduct" className="whitespace-nowrap cursor-pointer">New Product</Link> )}
                    {userData.email ? (
                  <p className="cursor-pointer text-white px-2 bg-richblack-800" onClick={handlelogout}>
                    Logout
                  </p>
                   ) :(

                  <Link to={"login"} className="whitespace-nowrap cursor-pointer px-2" >
                    Login
                  </Link>
               )}

                  </div>
               )}
               </div>
              
           </div>
         </div>
     </header>
  )
}
export default Header;