import React, { useState, useEffect } from "react";
import InputField from "../common/InputField/InputField";
import "./Style.css";
import ProfileImage from "../../assets/images/curved.png";
import Logo from "../../assets/images/logo.png";
import SwitchAuth from "./SwitchAuth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const emailchangeHandler = (value) => {
        setemail(value);
    };
    const passwordchangeHandler = (value) => {
        setpassword(value);
    };

    return (
        <>
            <div className="d-flex m-block">
                <div className="left-panel">
                    <img src={ProfileImage} className="curved" />
                    <img src={Logo} className="logo" />
                </div>
                <div className="right-panel">
                    <div className="auth-switcher">
                        <SwitchAuth isLoginActive="true" isSignupActive="false" />
                    </div>
                    <div className="font-body text-center">
                        <span className="login100-form-title">
                            Sign in to your account
                            <div>
                                <span className="small-caption"> Don't have an account? </span>
                                <a href="#" className="caption">
                                    Sign up
                                </a>
                            </div>
                        </span>
                        <form className="form">
                            <InputField placeholder="Email Addres" id="email_address" name="email_address" value={email} onChange={(e) => emailchangeHandler(e.target.value)} htmlFor="email_address" type="email" />
                            <InputField placeholder="Password" id="password" name="password" value={password} onChange={(e) => passwordchangeHandler(e.target.value)} htmlFor="password" type="password" />
                            <div class="text-end">
                                <Link to="#" className="fotget-password">
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="form-footer">
                                <button className="primary-button">Sign In</button>
                            </div>
                            <div class="text-for-alignment m-t-40">
                                <h6>or continue with</h6>
                            </div>
                            <FontAwesomeIcon icon={["fab", "google"]} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
