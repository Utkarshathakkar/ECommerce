import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import login from "../assets/login.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

 const Header = () => {
   const [shadow,setshadow]=useState(false);

   function handleClick(){
      setshadow(prev=>!prev)
   }
  

   console.log(process.env.REACT_APP_ADMIN_EMAIL)
  return (
     <header className="fixed shadow-md w-full h-16 px-2 md:px-4 bg-white">
        
          <div className="flex items-center h-full justify-between">
          <div className="h-10">
            <img src={login} alt="noimg" className="h-full"/>
          </div>
           <div className="flex items-center gap-4 md:gap-6">
              <nav className="flex gap-4 md:gap-6 texr-base md:text-lg">
                <Link to="/">Home</Link>
                <Link to="/menu">menu</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
              </nav>
              <div className="text-2xl text-slate-500 relative">
                 <BsCartFill/>
                 <div className="absolute -top-1 -right-1 text-white bg-blue-600 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">0</div>
              </div>
               <div className="text-slate-600" onClick={handleClick}>
               <div className="text-3xl cursor-pointer">
                 <HiOutlineUserCircle/>
              </div>
              {
               shadow && (
                  <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                     <Link to="/newproduct" className="whitespace-nowrap cursor-pointer">New Product</Link>
                    <Link to="/login" className="whitespace-nowrap cursor-pointer">Login</Link>
                  </div>
               )}
               </div>
              
           </div>
         </div>
     </header>
  )
}
export default Header;