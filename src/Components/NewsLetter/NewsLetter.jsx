import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1 className="">GET EXCLUSIVE Ofeers On Your Email</h1>
        <p className="">Subscribe to our newletter and updated</p>
        <div className="">
          <input type="email" className="" placeholder='Your email id'/>
          <button className="">Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter;