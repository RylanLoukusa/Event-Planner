import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyles from '../Global.module.css';
import styles from './Home.module.css'
// image logo
// const logo = 'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w';

const Home = () =>  {
  let navigate = useNavigate();

  return (
    <div className={GlobalStyles.setup}>
      <div className={GlobalStyles.page}>
        <button className={GlobalStyles.backButton} onClick={() => navigate('/')}> Back </button>
        <div style={{ overflow: 'scroll' }}>
          <h1 className={GlobalStyles.titleText}>Rooms Available for Booking</h1> {/* Use <h1> instead of <title> for in-document titles */}
          <div className={GlobalStyles.selectionView}>
            <h2 className={GlobalStyles.headerText}>Party Room</h2>
            <div >
              <ul className={styles.list}>
                <li>Packages start at $210</li>
                <li>1st Floor Party Room</li>
                <li>Capacity: 15</li>
              </ul>
            </div>
            <h2 className={GlobalStyles.headerText}>Dining Room</h2>
            <div>
              <ul className={styles.list}>
                <li>Packages start at $210</li>
                <li>2nd Floor Dining Room</li>
                <li>Capacity: 25</li>
              </ul>
            </div>
            <button className={GlobalStyles.button} onClick={() => navigate('/AvailableTimes')}>
            Proceed to Booking 
          </button>
          
          </div>
        </div>
        <br/>
        <button className={GlobalStyles.specialButton} onClick={() => navigate('/SpecialRequest')}>
            Request Special Booking 
          </button>
        <p style={{fontSize:"10px"}}>*Special bookings are Field Trips, Third Floor Events, and Auditorium Reservations</p>
      </div>
    </div>
  );
}

export default Home;