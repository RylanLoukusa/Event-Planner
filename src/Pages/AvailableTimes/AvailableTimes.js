import React, { useState } from "react";
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import GlobalStyles from '../Global.module.css';
import styles from './AvailableTimes.module.css';


const AvailableTimes = ()  =>  {
    let navigate = useNavigate();
    const [value, onChange] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const numWeeks = 2;
    const curFullDate = new Date();
    let curDate = "";
    let curTime = "";
    const earliest = new Date();
    const latest = new Date();
    earliest.setDate(earliest.getDate() + numWeeks * 7);
    latest.setDate(latest.getDate() + numWeeks * 60);
  
    const [selectedPTime, setSelectedPTime] = useState(null);
    const [selectedDTime, setSelectedDTime] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);

    const ptimes = ['10am', '2pm', '6pm'];
    const dtimes = ['10:30am', '2:30pm'];
    const roomOption = ['Dining Room', 'Party Room'];


    const handleSelectedRoom = (room) => {
        if(selectedRoom === room){
            setSelectedRoom(null);
        }else{
            setSelectedRoom(room);
        }
    }
    const handleSelectTime = (time, type) => {
        if (type === "party") {
            setSelectedPTime(time === selectedPTime ? null : time);
        }
        else if (type === "dining"){
            setSelectedDTime(time === selectedDTime ? null : time);
        }
        else{
            alert("Please select a vaild party type")
        }
        console.log(time);
        alert(time);
    };

    // const API_URL = "http://localhost:5092/";
  
    // const addHost = async () => {
    //   // Whatever API connection needs to happen goes here
    // };

    const handleSelectDate = (date) => {
        setSelectedDate(date); // Update the selected date state
        alert(`Selected Date: ${date.toLocaleDateString()}`); // Alert the selected date
        curDate = date.toLocaleDateString();
    };

    // DateTime dT = new DateTime(date);
    // alert(dt);
    const confirm = () => {
        if (!selectedDate) {
            alert("Please select a date");
            return;
        }
    
        let dateTime = selectedDate.toLocaleDateString(); // Get the selected date in string format

        if (selectedRoom === '' || selectedRoom === null) {
            alert("Please select a room type");
            return;
        }

        if (selectedRoom === 'Dining Room' && !selectedDTime) {
            alert("Please select a time for the dining room");
            return;
        }
    
        if (selectedRoom === 'Party Room' && !selectedPTime) {
            alert("Please select a time for the party room");
            return;
        }
    
        let selectedTime = selectedRoom === 'Dining Room' ? selectedDTime : selectedPTime; // Get the selected time
        dateTime += ` ${selectedTime}`; // Append the selected time to the date string
        
        alert(`Selected Date and Time: ${dateTime}`);
        //2095-07-23T12:42:06 is the date time format
        //however it is saving it as 5/24/2024 2:30pm format instead


        //push that to the API


        //Go to the next webpage

        
    };

    return (
        <div className={GlobalStyles.setup}>
            <div className={GlobalStyles.page}>
                <button className={GlobalStyles.backButton}type="button" onClick={() => navigate('/Home')}>Back</button>
                <h1 className={GlobalStyles.titleText}>Date Selection</h1>
                <h2>Please select a date:</h2>
                <Calendar
                    selectRange={false}
                    onChange={(date) => {
                        onChange(date);
                        setSelectedDate(date);
                        handleSelectDate(date);
                    }}
                    value={value}
                    minDate={earliest}
                    maxDate={latest}
                    activeStartDate={null}
                />
                
                {roomOption.map((room) => (
                    <div>
                     <button
                     key={room}
                     onClick={() => handleSelectedRoom(room)}
                     className={selectedRoom === room ? GlobalStyles.selectedButton : GlobalStyles.button}
                   >
                     {room}
                   </button>
                   </div>
                ))}
                
                {selectedRoom && (
        <div >
          {selectedRoom === 'Dining Room' && (
            <div className={GlobalStyles.setup}>
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
            </div>
          )}
          
          {selectedRoom === 'Party Room' && (
            <div className={GlobalStyles.setup}>
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
            </div>
          )}
          </div>
        )}
                
                {/* navigate('/MealDeal') */}
                <button className={GlobalStyles.continueButton}type="button" onClick={() => confirm()}>Continue</button>
            </div>
        </div>
    );
}

export default AvailableTimes;