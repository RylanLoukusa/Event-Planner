import React, { useState } from "react";
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import GlobalStyles from '../Global.module.css'


const AvailableTimes = ()  =>  {
    let navigate = useNavigate();
    const [value, onChange] = useState(new Date());
    const numWeeks = 2;
    const earliest = new Date();
    const latest = new Date();
    earliest.setDate(earliest.getDate() + numWeeks * 7);
    latest.setDate(latest.getDate() + numWeeks * 60);
  
    //This is how the radio button is currently being selected
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleRadioChange = (value) => {
        setSelectedValue(value);
    };    

    return (
        <div className={GlobalStyles.setup}>
            <h1>Please select a date:</h1>
            <Calendar
                selectRange={true}
                onChange={onChange}
                value={value}
                minDate={earliest}
                maxDate={latest}
                activeStartDate={null}
            />
            <h1>Please select a time for the party room:</h1>
            <form>
                <input
                type="radio"
                id="option1"
                value="option1"
                checked={selectedValue === 'option1'}
                onChange={() => handleRadioChange('option1')}
                />
                10am
                <input
                type="radio"
                id="option2"
                value="option2"
                checked={selectedValue === 'option2'}
                onChange={() => handleRadioChange('option2')}
                />
                2pm
                <input
                type="radio"
                id="option3"
                value="option3"
                checked={selectedValue === 'option3'}
                onChange={() => handleRadioChange('option3')}
                />
                6pm
            </form>
            <br></br>

            <h1>Please select a time for the dinning room:</h1>
            <form>
                <input
                type="radio"
                id="option4"
                value="option4"
                checked={selectedValue === 'option4'}
                onChange={() => handleRadioChange('option4')}
                />
                10:30am
                <input
                type="radio"
                id="option5"
                value="option5"
                checked={selectedValue === 'option5'}
                onChange={() => handleRadioChange('option5')}
                />
                2:30pm
            </form>

            <button className={GlobalStyles.button}type="button" onClick={() => navigate('/Information')}>Back</button>
            <div> Book Edit</div>
            <button className={GlobalStyles.button}type="button" onClick={() => navigate('/MealDeal')}>Continue</button>
        </div>
    );
}

export default AvailableTimes;