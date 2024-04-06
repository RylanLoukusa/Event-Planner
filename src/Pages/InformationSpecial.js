import TextField from "../Components/TextField.jsx"
import { React } from "react";
import "../Styles/Information.css"

const InformationSpecial = () => {
    return (
        <div className="setup">
            <h1 className="title-text">YOUR INFORMATION</h1><br />

            <TextField action="Enter" label="First Name" />
            <TextField action="Enter" label="Last Name" />
            <TextField action="Enter" label="Email Address" />
            <TextField action="Confirm" label="Email" />
            <TextField action="Enter" label="Phone Number" />
            <TextField action="Enter" label="Address" />
            <TextField action="Enter" label="City" />
            <TextField action="Enter" label="State" />
            <TextField action="Enter" label="ZIP" />

            <button className="buttons">Next: Select Package</button>

            <p>Booking TIME on DATE</p>

            <button className="buttons">Change or Cancel</button>
        </div>
    );
}

export default InformationSpecial;
