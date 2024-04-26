import { React } from "react";
import { Component } from 'react';
import GlobalStyles from "../Global.module.css";
import ThirdFloorQuestions from '../Admin/ThirdFloorQuestions';
import FieldTripQuestions from '../Admin/FieldTripQuestions';
import AuditoriumQuestions from '../Admin/AuditoriumQuestions';

const SpecialRequest = () => {
    return(
    <div className={GlobalStyles.setup}>
        <div className={GlobalStyles.page}>
            <h1 className={GlobalStyles.titleText}>Which booking do you require?</h1>
              <h2 className={GlobalStyles.headerText}>Auditorium Rental</h2>
              <AuditoriumQuestions/>

              <h2 className={GlobalStyles.headerText}>Third Floor Event</h2>
              <ThirdFloorQuestions/>

              <h2 className={GlobalStyles.headerText}>Field Trip</h2>
              <FieldTripQuestions/>
          </div> 
    </div>
        
    );
}
export default SpecialRequest;