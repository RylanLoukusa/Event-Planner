import QuestionnaireTextField from "../../Components/QuestionnaireTextField.jsx";
import SeatingSelect from "../../Components/SeatingSelect.jsx";
import { useNavigate } from 'react-router-dom';

import { React } from "react";
import styles from "./Questionaire.css";
import GlobalStyles from "../Global.module.css";

const Questionaire = () => {
    let navigate = useNavigate();
    return (
        <div className={GlobalStyles.setup}>
            <h1 className={GlobalStyles.titleText}>Questionnaire</h1><br />

            <QuestionnaireTextField label="What is your birthday child's name and age? (required)" />
            <QuestionnaireTextField label="How many children will be attending the event? (required)" />
            <QuestionnaireTextField label="How many adults will be attending the event? (required)" />
            <QuestionnaireTextField label="What movie would you like to see? (required)" />

            <SeatingSelect />

            <QuestionnaireTextField label="Additional Questions (optional)" />

            <button className={styles.buttons}>Next: Book Spot</button>

            <p>Booking TIME on DATE</p>

            <button className={styles.buttons}>Change or Cancel</button>
        </div>
    );
}

export default Questionaire;
