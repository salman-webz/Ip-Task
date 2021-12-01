import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryName } from "../store/action";
import './Style.css';

function IpComponent() {
  const [ipAddress, setIpAddress] = useState(""); 
  const dispatch = useDispatch();
    const findCountryHandler = () => {
        dispatch(getCountryName(ipAddress));
    }
  return (
    <div className="">
        <input type="text" name="ip" onChange={(e) => setIpAddress(e.target.value)} />   
        <button className="submit-button" onClick={findCountryHandler}>Find Country</button>
    </div>
  );
}

export default IpComponent;
