import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [menu,setMenu] = useState("shop");



  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" className="" />
            <p className="">SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}} className=""><Link style={{ textDecoration: 'none' }} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}} className=""><Link style={{ textDecoration: 'none' }} to="/men">Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}} className=""><Link style={{ textDecoration: 'none' }} to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}} className=""><Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button className="">Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="" className="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar;