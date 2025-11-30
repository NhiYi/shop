import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1 className="">Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" className="" placeholder='Your Name'/>
          <input type="email" className="" placeholder='Email Address'/>
          <input type="password" className="" placeholder='Password'/>
          <button className="">Continue</button>
        </div>
        <p className="loginsignup-login">Already have an account? <span className="">Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" className="" name="" id=""/>
          <p className="">By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;