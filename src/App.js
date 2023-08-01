import React from "react";
import './App.css';
import {Routes,Route} from "react-router-dom";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js"
import About from "./pages/About.js"
import NewProduct from "./pages/NewProduct.js";
import Menu from "./pages/Menu.js";
import Home from "./pages/Home.js";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { setDataProduct } from "./redux/product";
import { useEffect } from "react";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";


function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
 
  useEffect(()=>{
    (async()=>{
      const res = await fetch("http://localhost:8000/product");
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
  },[])
  console.log(productData);
  return (
    <>
    <Toaster/>
    <div>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/newproduct" element={<NewProduct/>}/>
        <Route path="menu/:filterby" element={<Menu />} />
        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<Success/>}/>
        <Route path="cancel" element={<Cancel/>}/>

      </Routes>

    </div>
    </>
  );
}

export default App;
