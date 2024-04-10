import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Home.css";
// image logo
const logo = 'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w';

const Home = () =>  {
  let navigate = useNavigate();

  return (
    <div className="setup">
      <img src={logo} alt="Logo" style={{ width: '400px', height: '225px' }} />
      <div style={{ overflowY: 'scroll' }}>
        <h1 className="title-text">Book your Party</h1> {/* Use <h1> instead of <title> for in-document titles */}
        <div className="selection-view">
          <h2 className="header-text">Party Room</h2>
          <p>
            5 minutes - packages start at $210
            <br /> St. Michael Cinema
            <br /> 1st Floor Party Room
            <br /> Capacity: 15
          </p>
          <button className="buttons" onClick={() => navigate('/Information')}>
            Book this Room
          </button>
        </div>
        <div className="selection-view">
          <h2 className="header-text">Dining Room</h2>
          <p>
            5 minutes - packages start at $210
            <br /> St. Michael Cinema
            <br /> 2nd Floor Dining Room
            <br /> Capacity: 25
          </p>
          <button className="buttons" onClick={() => navigate('/Information')}>
            Book this Room
          </button>
        </div>
        <button className="buttons" onClick={() => navigate('/InformationSpecial')}>
          Request a special booking?
        </button>
        <button className="buttons" onClick={() => navigate('/AdminVerify')}>
          Admin: manage bookings
        </button>
      </div>
    </div>
  );
}

export default Home;