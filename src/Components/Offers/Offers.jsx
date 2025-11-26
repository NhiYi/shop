import React from 'react';
import "./Offers.css";
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1 className="">Exclusive</h1>
            <h1 className="">Offers For You</h1>
            <p className="">ONLY ON BEST SELLERS PRODUCTS</p>
            <button className="">Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" className="" />
        </div>
    </div>
  )
}

export default Offers;