// Import React and CSS styles
import React from 'react';
import '../Styles/FieldTripQuestions.css'; 

const FieldTripQuestions = () => {
  return (
    <div className="field-trip-container">
      <h1>Field Trip Questions</h1>
      <div className="question-box">
        <div className="question">What is your school / organization</div>
        <input className="input-field" placeholder="input:" />

        <div className="question">What movie would you like to see?</div>
        <input className="input-field" placeholder="input:" />

        <div className="question">Any other details we should know about?</div>
        <input className="input-field" placeholder="input:" />
      </div>
    </div>
  );
}

export default FieldTripQuestions;
