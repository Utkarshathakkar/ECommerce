import React from 'react'
import Header from '../components/Header'
import axios from "axios";
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import {BsCloudUpload} from "react-icons/bs"
import { ImagetoBase64 } from '../util/base64'


const NewProduct = () => {
  const [data,setData] = useState({
    name : "",
    category : "",
    image : "",
    price : "",
    description : ""
  })

  const handleOnChange = (event)=>{
    

    setData((prev)=>{
        return{
          ...prev,
          [event.target.name]:event.target.value
        }
    })

  }

  const uploadImage = async(e)=>{
      const data = await ImagetoBase64(e.target.files[0])
      // console.log(data)

      setData((prev)=>{
        return{
          ...prev,
          image : data
        }
      })
  }

  const handleSubmit = async(event)=>{
    event.preventDefault()
    console.log(data);
    const {name,image,category,price}=data;
    if(name && image && category && price){
      const fetchData = await fetch("http://localhost:8000/newproduct",{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
  
      const fetchRes =  await fetchData.json()
      console.log(fetchRes)
      toast.success(fetchRes.message)
       setData(()=>{
        return{
          name : "",
          category : "",
          image : "",
          price : "",
          description : ""
        }
      })

    }
    else{
      toast("Enter required fields");
    }
  }
  return (
    <div className="bg-richblack-900 h-screen" >
          <Header/>
       <div className="pt-[140px] pb-[80px] pl-20 pr-20 ">
       <form className='m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type={"text"}  name="name" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={data.name}/>

        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' id='category' name='category' onChange={handleOnChange} value={data.category}>
          <option value={"other"}>select category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetable"}>Vegetable</option>
          <option value={"icream"}>Icream</option>
          <option value={"dosa"}>Dosa</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"rice"}>rice</option>
          <option value={"cake"}>Cake</option>
          <option value={"burger"}>Burger</option>
          <option value={"panner"}>Panner</option>
          <option value={"sandwich"}>Sandwich</option>
        </select>

        <label htmlFor='image'>Image
        <div  className='h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer'>
            {
              data.image ? <img src={data.image} className="h-full" /> :<span className='text-5xl'><BsCloudUpload/></span> 
            }
            
            
           <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden"/>
        </div>
        </label>
        

        <label htmlFor='price' className='my-1 relative'>
          Price
          </label>
        <input type={"text"} className='bg-slate-200 p-1 my-1'  name='price' onChange={handleOnChange} value={data.price} />

        <label htmlFor='description'>Description</label>
        <textarea rows={2} value={data.description} className='bg-slate-200 p-1 my-1 resize-none' name='description' onChange={handleOnChange}></textarea>

        <button className='bg-cyan-800 hover:bg-cyan-950 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
       </form>
    </div>
    </div>
  )
}

export default NewProduct