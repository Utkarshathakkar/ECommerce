import React from 'react'

const Menu = () => {
  return (
   /* <div>
        <div className="pt-5 w-screen  bg-gray-800 ">
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
         <div className="w-11/12 max-w-[460px]">
   <form onSubmit={submithandler}>
<div className="flex gap-x-4 mt-[15px]">
  <label className="w-full">
        <p className="text-[0.875rem]  mb-1 leading-[1.375rem]">first Name
            <sup className="text-pink-200">*</sup>
        </p>
        <input
        required
        type="text"
        name="firstname"
        onChange={changehandler}
        placeholder="firstname"
        value={formdata.firstname}
        className="  bg-gray-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
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
        className="  bg-gray-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
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
        className="  bg-gray-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
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
        className="  bg-gray-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
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
        className=" rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        />
      <span className="absolute right-3 top-[38px] cursor-pointer" onClick={()=>{
            setshowconfirmpassword((prev)=>
                !prev) } }>
            {showconfirmpassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
     </span>
        
     </label>

     </div>
  
  <button className="bg-yellow-500 rounded-[8px] font-medium  px-[12px] py-[8px] mt-6 w-full">
   Create account
  </button>
  <p className="text-left text-sm mt-2">
      Already have account ?{" "}
      <Link to={"/login"} className="text-white-500 underline">
        Login
      </Link>
    </p>

</form>
   </div>
 </div>
</div>
    </div>*/
    Menu
  )
}

export default Menu