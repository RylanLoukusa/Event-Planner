import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../Styles/ThirdFloorQuestions.css'; // Make sure the path is correct

const ThirdFloorQuestions = () =>  {
  let navigate = useNavigate();
  return (
    <div className="third-floor-container">
      <h1>Third Floor Rental</h1>
      <div className="question-box">
        <label className="question-label">What is the name of your Business / Organization</label>
        <input className="input-field" placeholder="input:" />

        <label className="question-label">Expected Attendance</label>
        <input className="input-field" placeholder="input:" />

        <label className="question-label">Do you have any requests regarding our catering menu?</label>
        <input className="input-field" placeholder="input:" />

        {/* This label is repeated, you might want to adjust if it was not intended */}
        <label className="question-label">Do you have any requests regarding our catering menu?</label>
        <input className="input-field" placeholder="input:" />
      </div>
    </div>
  );
}

export default ThirdFloorQuestions;
