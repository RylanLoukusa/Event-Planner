import React from "react";
import { useNavigate } from 'react-router-dom';


const Date = ()  =>  {
    let navigate = useNavigate();
    return (
        <div>
            <div> Book Edit</div>
            <button type="button" onClick={() => navigate('/Information')}>Back</button>
            <button type="button" onClick={() => navigate('/MealDeal')}>Continue</button>
        </div>
    )
}

export default Date;