import TextField from "../../Components/TextField.jsx";
import { useNavigate } from 'react-router-dom';
import { React } from "react";
import styles from "./Information.module.css";
import GlobalStyles from "../Global.module.css";

const Information = () => {
    let navigate = useNavigate();

    return (
        <div className={GlobalStyles.setup}>
            <div className={GlobalStyles.page}>
                <h1 className={GlobalStyles.titleText}>YOUR INFORMATION</h1><br />
                <div className = {styles.inputPrompt}>
                    <TextField action="Enter" label="First Name" />
                    <TextField action="Enter" label="Last Name" />
                    <TextField action="Enter" label="Email Address" />
                    <TextField action="Confirm" label="Email Address" />
                    <TextField action="Enter" label="Phone Number " />
                    <TextField action="Enter" label="Address" />
                    <TextField action="Enter" label="City" />
                    <TextField action="Enter" label="State" />
                    <TextField action="Enter" label="ZIP" />
                </div>

                <button type="button" onClick={() => navigate('/')}>Back</button>
                <button type="button" onClick={() => navigate('/Date')}>Continue</button>

                <p>Booking TIME on DATE</p>

                <button className={styles.buttons} onClick={()=> navigate('/Home')}>Change or Cancel</button>
            </div>
        </div>
    );
}

export default Information;
