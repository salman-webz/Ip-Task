import React , { useState, useEffect } from "react";
import './Style.css';
import ProfileImage from "../../assets/images/curved.png";
import Logo from "../../assets/images/logo.png";
import Login from "./login";
import SwitchAuth from "./SwitchAuth"
import Signup from "./signup"

const AuthComponent = () => {
 
  return (
    <>
      <div className="d-flex m-block">
        <div className="left-panel">
          <img src={ProfileImage} className="curved"/>
          <img src={Logo} className="logo"/>
        </div>
        <div className="right-panel">
            <div className="auth-switcher">
              <SwitchAuth />
            </div>
             <Login />
        </div>
      </div>
    </>
  );
};

export default AuthComponent;
