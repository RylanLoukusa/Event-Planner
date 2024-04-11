import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/AdminVerify.css"

const AdminVerify = () => {
  let navigate = useNavigate();
  const logo = 'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w';


  return (
    <div className="setup">
      <img src={logo} alt="Logo" style={{ width: '400px', height: '225px' }} />

      <form className="selection-view">
        <h1 className="header">In order to continue please enter your credentials</h1>

        <label className="input-prompt">First Name</label>
        <input required className="input" placeholder="First Name"  />

        <label className="input-prompt">Last Name</label>
        <input required className="input" placeholder="Last Name"  />

        <label className="input-prompt">Passcode</label>
        <input required className="input" placeholder="Passcode" type="password"  />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AdminVerify;
