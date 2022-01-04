import React, { useState, useEffect } from "react";
import InputField from "../common/InputField/InputField";
import "./Style.css";
import ProfileImage from "../../assets/images/curved.png";
import Logo from "../../assets/images/logo.png";
import SwitchAuth from "./SwitchAuth";
import { useHistory } from "react-router";

const SignupComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    let history = useHistory();

    const firstNameChangeHandler = (value) => {
        setFirstName(value);
    };
    const lastNameChangeHandler = (value) => {
        setLastName(value);
    };
    const emailchangeHandler = (value) => {
        setemail(value);
    };
    const passwordchangeHandler = (value) => {
        setpassword(value);
    };
    const signupButtonHandler = () => {
      history.push("/addbusiness")
    }

    return (
        <>
            <div className="d-flex m-block">
                <div className="left-panel">
                    <img src={ProfileImage} className="curved" />
                    <img src={Logo} className="logo" />
                </div>
                <div className="right-panel">
                    <div className="auth-switcher">
                        <SwitchAuth activePage="false" isSignupActive="true" />
                    </div>
                    <div className="font-body text-center">
                        <span className="login100-form-title">Create a Penguin Health Account</span>
                        <form className="form">
                            <InputField placeholder="First name" id="first_name" name="first_name" value={firstName} onChange={(e) => firstNameChangeHandler(e.target.value)} htmlFor="email_address" type="email" />
                            <InputField placeholder="last Name" id="lastName" name="lastName" value={lastName} onChange={(e) => lastNameChangeHandler(e.target.value)} htmlFor="lastName" type="lastName" />
                            <InputField placeholder="Email Addres" id="email_address" name="email_address" value={email} onChange={(e) => emailchangeHandler(e.target.value)} htmlFor="email_address" type="email" />
                            <InputField placeholder="Password" id="password" name="password" value={password} onChange={(e) => passwordchangeHandler(e.target.value)} htmlFor="password" type="password" />
                            <div className="form-footer">
                                <button className="primary-button" onClick={signupButtonHandler}>Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupComponent;
