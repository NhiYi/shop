import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";


const Navbar = () => {

  const [menu,setMenu] = useState("shop");



  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" className="" />
            <p className="">SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}} className="">Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}} className="">Men{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}} className="">Women{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}} className="">Kids{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button className="">Login</button>
            <img src={cart_icon} alt="" className="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar;