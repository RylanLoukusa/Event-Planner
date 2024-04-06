import React from 'react';
import '../Styles/AuditoriumQuestions.css'; // Make sure the path to your CSS file is correct

const AuditoriumQuestions = () => {

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
          <input className="input-field" placeholder="input:" />

          <div className="question">Please acknowledge that you will need to bring in your media 7-10 days before your event in order to format your movie properly.</div>
          <label>
            <input type="checkbox" /> Checkbox here
          </label>
        </div>
      </div>
    </div>
  );
}

export default AuditoriumQuestions;