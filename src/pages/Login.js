import React from "react";
import {useState} from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate} from "react-router-dom"
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/useSlice";
import { Link } from "react-router-dom";

 function Login(){

    const navigate=useNavigate();
    const userData = useSelector(state => state)
    const dispatch = useDispatch()

    const [formdata,setformdata]=useState({
        email:"",password:""
    })

    const[showpassword,setshowpassword]=useState(false);
    
    function changehandler(event){
          setformdata((prevData)=>(
           {
              ...prevData,[event.target.name]:event.target.value
           }
           ) )
     } 
    async function submithandler (event){
          event.preventDefault();
          const {email,password}=formdata;
          if(email&& password){
            const fetchData = await fetch("http://localhost:8000/login",{
                method:"POST",
                headers:{
                  "content-type" : "application/json"
                },
                body:JSON.stringify(formdata)
              })
              const dataRes = await fetchData.json()
            
              
             toast(dataRes.message);
              if(dataRes.alert){
                dispatch(loginRedux(dataRes))
                setTimeout(() => {
                  navigate("/")
                }, 1000);
              }
              

          }
          else{
            toast("please enter required details")
          }
          
          toast.success("successfully logged In");
          navigate("/")
   
     }
    return(
      <div className="bg-richblack-900 h-screen">
          <Header/>
          <div className="flex justify-center w-11/12 max-w-[1160px] py-12  ">
               <div className="w-11/12 max-w-[460px]  pt-[150px]">
      <form  className="flex flex-col w-full gap-y-4 mt-6" onSubmit={submithandler}>
        <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email address
                <sup className="text-pink-200">*</sup>
            </p>
            <input
            required
            type="email"
            value={formdata.email}
            onChange={changehandler}
            placeholder="Enter Email"
            name="email"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
             />
        </label>

        <lable className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                password
         <sup className="text-pink-200">*</sup>
            </p> 
                <input
                required
                type={showpassword?"text":"pasword"}
                value={formdata.password}
                onChange={changehandler}
                placeholder="Enter password"
                name="password"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
         
                <span className="absolute right-3 top-[38px] cursor-pointer" onClick={()=>{
                setshowpassword((prev)=>
                    !prev) } }>
                {showpassword? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
               </span>

         </lable>      
    
     <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
      Login
     </button>
        
   </form>
   <p className="text-left text-sm mt-2 text-white">
        Don't  have account ?{" "}
        <Link to={"/signup"} className="text-red-500 underline">
          Sign Up
        </Link>
      </p>

         </div>
       </div>
   </div>
    )
}

export default Login;