import QuestionnaireTextField from "../../Components/QuestionnaireTextField.jsx";
import { useNavigate } from 'react-router-dom';
import {Select} from 'react-select';

import { React } from "react";
import GlobalStyles from "../Global.module.css";

const Questionaire = () => {
    let navigate = useNavigate();
    return (
        <div className={GlobalStyles.setup}>
            <h1 className={GlobalStyles.titleText}>Questionnaire</h1><br />
            <label>What is your birthday child's name and age? </label>
            <input required/>
            <label>How many children will be attending the event? </label>
            <input required />
            <label>How many adults will be attending the event?</label>
            <input required/>
            <label>What movie would you like to see?</label>
            <input required/>

            <Select />

            <QuestionnaireTextField label="Additional Questions (optional)" />

            <button className={GlobalStyles.button} onClick={() => navigate('/Summary')}>Next: Book Spot</button>

            <p>Booking TIME on DATE</p>

            <button className={GlobalStyles.specialButton}>Change or Cancel</button>
        </div>
    );
}

export default Questionaire;
