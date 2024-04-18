import React from 'react';
import AddHost from './AddHostDialog';
// import '../Styles/AdminView.css';
import ThirdFloorQuestions from './ThirdFloorQuestions';
import FieldTripQuestions from './FieldTripQuestions';
import AuditoriumQuestions from './AuditoriumQuestions';
import { useNavigate } from 'react-router-dom';
import GlobalStyles from '../Global.module.css';





const AdminView = () => {
  let navigate = useNavigate(); 
  return (
    <div>
      <button className={GlobalStyles.button}type="button" onClick={() => navigate('/')}>Back</button>

      <div className={GlobalStyles.setup}>
        <div className={GlobalStyles.page}>
          <AddHost/>
          <h1 className={GlobalStyles.titleText}>What kind of booking do you require?</h1>
          <div className='selection-view'>
            <h2 className={GlobalStyles.headerText}>Auditorium Rental</h2>
            <AuditoriumQuestions/>

            <h2 className={GlobalStyles.headerText}>Third Floor Event</h2>
            <ThirdFloorQuestions/>

            <h2 className={GlobalStyles.headerText}>Field Trip</h2>
            <FieldTripQuestions/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminView;

