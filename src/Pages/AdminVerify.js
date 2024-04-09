import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/AdminVerify.css"

const AdminVerify = () => {
  let navigate = useNavigate();
  const logo = 'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w';


  return (
    <div className="setup">
      <img src={logo} alt="Logo" style={{ width: '400px', height: '225px' }} />

      <div className="selection-view">
        <div className="header">In order to continue please enter your credentials</div>

        <label className="input-prompt">First Name</label>
        <input className="input" placeholder="First Name" required />

        <label className="input-prompt">Last Name</label>
        <input className="input" placeholder="Last Name" required />

        <label className="input-prompt">Passcode</label>
        <input className="input" placeholder="Passcode" type="password" required />

        <button className="buttons" onClick={() => navigate('/AdminView')}>
          <div className="button-text">Submit</div>
        </button>
      </div>
    </div>
  );
}

export default AdminVerify;
