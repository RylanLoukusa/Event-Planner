import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyles from '../Global.module.css';

const Confirmation = () => {
    let navigate = useNavigate();

    const [email, setEmail] = useState("USER EMAIL");

    return (
        <div className={GlobalStyles.setup}>
            <p>Thank you for planning your event with us!</p>
            <p>A confirmation email has been sent to {email}</p>
            <button className={GlobalStyles.button} onClick={() => navigate('/')}>
                Back to Home
            </button>
        </div>
    );
}

export default Confirmation;