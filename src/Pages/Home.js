import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyles from './Global.module.css';
// image logo
const logo = 'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w';

const Home = () =>  {
  let navigate = useNavigate();

  return (
    
    <div className={GlobalStyles.setup}>
      <button className={GlobalStyles.specialButton} onClick={() => navigate('/AdminVerify')}>
            Admin
          </button>
      <div className={GlobalStyles.page}>
        <img src={logo} alt="Logo" style={{ width: '350px', height: '150px' }} />
        <div style={{ overflow: 'scroll' }}>
          <h1 className={GlobalStyles.titleText}>Book your Party</h1> {/* Use <h1> instead of <title> for in-document titles */}
          <div className={GlobalStyles.selectionView}>
            <h2 className={GlobalStyles.headerText}>Party Room</h2>
            <div >
              <ul className={GlobalStyles.list}>
                <li>5 minutes - packages start at $210</li>
                <li>St. Michael Cinema</li>
                <li>1st Floor Party Room</li>
                <li>Capacity: 15</li>
              </ul>
            </div>

            <button className={GlobalStyles.button} onClick={() => navigate('/Information')}>
              Book
            </button>
          </div>
          <div className={GlobalStyles.selectionView}>
            <h2 className={GlobalStyles.headerText}>Dining Room</h2>
            <div>
              <ul className={GlobalStyles.list}>
                <li>5 minutes - packages start at $210</li>
                <li>St. Michael Cinema</li>
                <li>2nd Floor Dining Room</li>
                <li>Capacity: 25</li>
              </ul>
            </div>

            <button className={GlobalStyles.button} onClick={() => navigate('/Information')}>
              Book
            </button>
          </div>
          
        </div>
        <button className={GlobalStyles.specialButton} onClick={() => navigate('/InformationSpecial')}>
            Special Booking Request
          </button>
      </div>
    </div>
  );
}

export default Home;