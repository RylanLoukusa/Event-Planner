import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyles from '../Global.module.css';
import styles from './Home.module.css';
// import "../Styles/Home.css";
// image logo
const logo = 'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w';

const Home = () =>  {
  let navigate = useNavigate();

  return (
    
    <div className={GlobalStyles.setup}>
      <div className={GlobalStyles.page}>
        <img src={logo} alt="Logo" style={{ width: '350px', height: '150px' }} />
        <div style={{ overflow: 'scroll' }}>
          <h1 className={GlobalStyles.titleText}>Book your Party</h1> {/* Use <h1> instead of <title> for in-document titles */}
          <div className={styles.selectionView}>
            <h2 className={styles.headerText}>Party Room</h2>
            <div className={styles.descriptionText}>
              <ul>
                <li>5 minutes - packages start at $210</li>
                <li>St. Michael Cinema</li>
                <li>1st Floor Party Room</li>
                <li>Capacity: 15</li>
              </ul>
            </div>

            <button className={styles.buttons} onClick={() => navigate('/Information')}>
              Book
            </button>
          </div>
          <div className={styles.selectionView}>
            <h2 className={styles.headerText}>Dining Room</h2>
            <div className={styles.descriptionText}>
              <ul>
                <li>5 minutes - packages start at $210</li>
                <li>St. Michael Cinema</li>
                <li>2nd Floor Dining Room</li>
                <li>Capacity: 25</li>
              </ul>
            </div>

            <button className={styles.buttons} onClick={() => navigate('/Information')}>
              Book
            </button>
          </div>
          <button className={styles.specialButton} onClick={() => navigate('/InformationSpecial')}>
            Special Booking
          </button>
          <button className={styles.specialButton} onClick={() => navigate('/AdminVerify')}>
            Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;