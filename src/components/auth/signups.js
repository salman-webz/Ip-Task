import React , { useState, useEffect } from "react";
import InputField from "../common/InputField/InputField";
import './Style.css';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const firstNameChangeHandler = (value) => {
    setFirstName(value)
  }
  const lastNameChangeHandler = (value) => {
    setLastName(value)
  }
  const emailchangeHandler = (value) => {
    setemail(value)
  }
  const passwordchangeHandler = (value) => {
    setpassword(value)
  }
  return (
    <>
      <div className="font-body text-center">
            <span className="login100-form-title">
                Create a Penguin Health Account
            </span>
            <form className="form">
              <InputField
                  placeholder="First name"
                  id="first_name"
                  name="first_name"
                  value={firstName}
                  onChange={(e) => firstNameChangeHandler(e.target.value)}
                  htmlFor="email_address"
                  type="email"
              />
              <InputField
                  placeholder="last Name"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => lastNameChangeHandler(e.target.value)}
                  htmlFor="lastName"
                  type="lastName"
              />
              <InputField
                  placeholder="Email Addres"
                  id="email_address"
                  name="email_address"
                  value={email}
                  onChange={(e) => emailchangeHandler(e.target.value)}
                  htmlFor="email_address"
                  type="email"
              />
              <InputField
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => passwordchangeHandler(e.target.value)}
                  htmlFor="password"
                  type="password"
              />
              <div className="form-footer">
                 <button className="primary-button">Sign In</button>  
              </div>
            </form>
      </div>
    </>
  );
};

export default Signup;
