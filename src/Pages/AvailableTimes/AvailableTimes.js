import React, { useState } from "react";
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import GlobalStyles from '../Global.module.css';
import styles from './AvailableTimes.module.css';


const AvailableTimes = ()  =>  {
    let navigate = useNavigate();
    const [value, onChange] = useState(new Date());
    const numWeeks = 2;
    const earliest = new Date();
    const latest = new Date();
    earliest.setDate(earliest.getDate() + numWeeks * 7);
    latest.setDate(latest.getDate() + numWeeks * 60);
  
    const [selectedPTime, setSelectedPTime] = useState(null);
    const [selectedDTime, setSelectedDTime] = useState(null);

    const ptimes = ['10am', '2pm', '6pm'];
    const dtimes = ['10:30am', '2:30pm'];

    const handleSelectTime = (time, type) => {
        if (type === "party") {
            setSelectedPTime(time === selectedPTime ? null : time);
        }
        else {
            setSelectedDTime(time === selectedDTime ? null : time);
        }
        console.log(time);
    };

    return (
        <div className={GlobalStyles.setup}>
            <div className={GlobalStyles.page}>
                <button className={GlobalStyles.backButton}type="button" onClick={() => navigate('/Information')}>Back</button>
                <h1 className={GlobalStyles.titleText}>Date Selection</h1>
                <h2>Please select a date:</h2>
                <Calendar
                    selectRange={true}
                    onChange={onChange}
                    value={value}
                    minDate={earliest}
                    maxDate={latest}
                    activeStartDate={null}
                />
                <h2>Please select a time for the party room:</h2>
                <div className={styles.container}>
                    {ptimes.map((time) => (
                        <button
                            key={time}
                            onClick={() => handleSelectTime(time, "party")}
                            className={selectedPTime === time ? styles.buttonSelected : styles.button}
                        >
                            {time}
                        </button>
                    ))}
                </div>
                {/* <form>
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
                </form> */}

                <h2>Please select a time for the dinning room:</h2>
                <div className={styles.container}>
                    {dtimes.map((time) => (
                        <button
                            key={time}
                            onClick={() => handleSelectTime(time, "dining")}
                            className={selectedDTime === time ? styles.buttonSelected : styles.button}
                        >
                            {time}
                        </button>
                    ))}
                </div>
                {/* <form>
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
                </form> */}
                <button className={GlobalStyles.continueButton}type="button" onClick={() => navigate('/MealDeal')}>Continue</button>
            </div>
        </div>
    );
}

export default AvailableTimes;