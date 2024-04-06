import QuestionnaireTextField from "../Components/QuestionnaireTextField.jsx";
import SeatingSelect from "../Components/SeatingSelect.jsx";
import DrinkSelect from "../Components/DrinkSelect.jsx";
import { React } from "react";
import "../Styles/Questionaire.css"

const Questionaire = () => {

    return (
        <div className="setup">
            <h1 className="title-text">Questionnaire</h1><br />

            <QuestionnaireTextField label="What is your birthday child's name and age? (required)" />
            <QuestionnaireTextField label="If you chose the Reel Pizza Party, what kind of pizza and how many? (options: cheese, pepperoni, sausage, pepperoni & sausage)" />
            <QuestionnaireTextField label="If you chose the Reel Meal Party, what kind of food and how many? (options: hot dog with fries, chicken tenders with fries)" />
            <QuestionnaireTextField label="How many children will be attending the event? (required)" />
            <QuestionnaireTextField label="How many adults will be attending the event? (required)" />
            <QuestionnaireTextField label="What movie would you like to see? (required)" />

            <SeatingSelect />
            <DrinkSelect />

            <QuestionnaireTextField label="Additional Questions (optional)" />

            <button className="buttons">Next: Book Spot</button>

            <p>Booking TIME on DATE</p>

            <button className="buttons">Change or Cancel</button>
        </div>
    );
}

export default Questionaire;
