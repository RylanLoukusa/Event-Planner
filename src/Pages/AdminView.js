import React from 'react';

import { useNavigate } from 'react-router-dom';
import "../Styles/AdminView.css";


const AdminView = () => {
  let navigate = useNavigate(); // Using React Router's hook for navigation

  return (
    <div>
      <div className="setup">
        <button className="add-host-button" onClick={() => {/* Your handler here */}}>Add A Host</button>
        <div>
          <p> Date </p>
          <p> Party name and type </p>
        </div>
      </div>
      <div className="setup">
        <h1 className="title-text">What kind of booking do you require?</h1>
        <div className="selection-view">
          <h2 className="header">Auditorium Rental</h2>
          <button onClick={() => navigate('/AuditoriumQuestions')} className="buttons"><span className="button-text">Book Now</span></button>

          <h2 className="header">Third Floor Event</h2>
          <button onClick={() => navigate('/ThirdFloorQuestions')} className="buttons"><span className="button-text">Book Now</span></button>

          <h2 className="header">Field Trip</h2>
          <button onClick={() => navigate('/FieldTripQuestions')} className="buttons"><span className="button-text">Book Now</span></button>
        </div>
      </div>
    </div>
  );
}
export default AdminView;
// export { UpcomingEvents, PastEvents, CreateEvents }; // Export components for routing

// Drawer and navigation setup omitted for brevity
