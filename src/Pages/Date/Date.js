import React from "react";
import { useNavigate } from 'react-router-dom';
import GlobalStyles from '../Global.module.css'


const Date = ()  =>  {
    let navigate = useNavigate();
    return (
        <div>
            <button className={GlobalStyles.button}type="button" onClick={() => navigate('/Information')}>Back</button>
            <div> Book Edit</div>
            <button className={GlobalStyles.button}type="button" onClick={() => navigate('/MealDeal')}>Continue</button>
        </div>
    )
}

export default Date;