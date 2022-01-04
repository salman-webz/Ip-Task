import React, { useState } from "react";
import "./Style.css";
import Plus from "../../../assets/images/plus.png";

const AddAddressComponent = () => {
    const [openAddressModal, setOpenAddressModal] = useState(false);
    const addAddressHAndler = () => {
        setOpenAddressModal(!openAddressModal)
    }
    return (
        <>
            <div className="d-flex add-address">
                    <div className="add-button-wrapper text-center">
                        <span className="login50-form-title">
                        Add Clinic Location
                            <div>
                                <span className="small-caption"> Let's Setup your Clinic information for easy future ordering
                                </span>
                            </div>
                        </span>
                        <div className="add-Address-button text-center" onClick={addAddressHAndler}>
                            <img src={Plus} alt="" style={{width: "13px"}} />
                            Add Address
                        </div>
                        {openAddressModal && <div></div>}
                </div>
            </div>
        </>
    );
};

export default AddAddressComponent;
