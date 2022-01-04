import React, { useState, Component  } from "react";
import "./Style.css";
import InputField from "../../common/InputField/InputField";
import Select from 'react-select'
import CrossIcon from "../../../assets/images/plus-light.png";


const AddAddressForm = (addAddressHandler) => {
    const [clinicName, setClinicName] = useState("");
    const [addressLine, setAddressLine] = useState("");
    const [unitNumber, setUnitNumber] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [phNumber, setPhNumber] = useState("");
    
    const clinicNameChangeHandler = (value) => {
        setClinicName(value)
    }
    const addressLineChangeHandler = (value) => {
        setAddressLine(value)
    }
    const citychangeHandler = (value) => {
        setCity(value)
    }
    const unitNumberchangeHandler = (value) => {
        setUnitNumber(value)
    }
    const postalCodechangeHandler = (value) => {
        setPostalCode(value)
    }
    const phNumberchangeHandler = (value) => {
        setPhNumber(value)
    }
    const options = [
        { value: 'province', label: 'Province' },
        { value: 'province1', label: 'Province 1' },
        { value: 'province2', label: 'Province 2' }
      ]
    
    return (
        <>
            <div className="d-flex add-address-modal"> 
                <form className="form">
                    <div className="close-modal" onClick={addAddressHandler.addAddressHandler}>
                        <img src={CrossIcon} />
                    </div>
                    <InputField
                        placeholder="Clinic Name"
                        id="clinicName"
                        name="clinicName"
                        value={clinicName}
                        onChange={(e) => clinicNameChangeHandler(e.target.value)}
                        htmlFor="clinicName"
                        type="text"
                    />
                    <InputField
                        placeholder="Address line 1"
                        id="addressLine"
                        name="addressLine"
                        value={addressLine}
                        onChange={(e) => addressLineChangeHandler(e.target.value)}
                        htmlFor="addressLine"
                        type="text"
                    />
                    <InputField
                        placeholder="Unit number"
                        id="unitNumber"
                        name="unitNumber"
                        value={unitNumber}
                        onChange={(e) => unitNumberchangeHandler(e.target.value)}
                        htmlFor="unitNumber"
                        type="text"
                    />
                    <InputField
                        placeholder="City"
                        id="city"
                        name="city"
                        value={city}
                        onChange={(e) => citychangeHandler(e.target.value)}
                        htmlFor="city"
                        type="text"
                    />
                    <Select options={options} defaultInputValue="Province" />
                     <InputField
                        placeholder="Postal Code"
                        id="postalCode"
                        name="postalCode"
                        value={postalCode}
                        onChange={(e) => postalCodechangeHandler(e.target.value)}
                        htmlFor="postalCode"
                        type="text"
                    />
                    <Select options={options} defaultInputValue="Country" />
                    <InputField
                        placeholder="Phone number"
                        id="phNumber"
                        name="phNumber"
                        value={phNumber}
                        onChange={(e) => phNumberchangeHandler(e.target.value)}
                        htmlFor="phNumber"
                        type="phNumber"
                    />
                    <div className="form-footer">
                        <button className="secoundry-button">Save</button>  
                    </div>
              </form>
            </div>
        </>
    );
};

export default AddAddressForm;
