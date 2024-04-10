import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../Styles/AuditoriumQuestions.css'; // Make sure the path to your CSS file is correct

const AuditoriumQuestions = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="auditorium-container">
        <h1 className="auditorium-header">Auditorium Rental Questions</h1>
        
        <div className="question-box">
          <div className="question">What are you celebrating?</div>
          <input className="input-field" placeholder="input:" />

          <div className="question">If you are celebrating a birthday, what age are you celebrating and what is their name?</div>
          <input className="input-field" placeholder="input:" />

          <div className="question">What movie do you plan to bring? (or enter the current movie you plan to see)</div>
          <input className="input-field" placeholder="input:" />

          <div className="question">Expected Attendance?</div>
          <input className="input-field" placeholder="input:" />

          <div className="question">Tell us what type of pizza you want and how many. (choice of cheese, sausage, pepperoni, or sausage & pepperoni)</div>
          <input className="input-field" placeholder="input:" />

          <div className="question">What else would you like us to know about your event?</div>
          <input required className="input-field" placeholder="input:" />

          <label>
            <input required type="checkbox" /> I acknowledge that I will need to bring in my media 7-10 days before my event in order to format my movie properly 
          </label>
        </div>
      </div>
    </div>
  );
}

export default AuditoriumQuestions;