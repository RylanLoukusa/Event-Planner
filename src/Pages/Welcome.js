import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyles from './Global.module.css';
import Login from './Information/Login'
import AdminVerify from './Admin/AdminVerify';

//image logo
const logo = 'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w';


const Welcome = () => {
    let navigate = useNavigate();
    return(
        <div className={GlobalStyles.setup}>
            <img src={logo} alt="Logo"/>

           <div className={GlobalStyles.page}>
            <h1 className={GlobalStyles.titleText}>
                Welcome to Saint Michael Cinema Event Booking
            </h1>
            <br/>
            
            <h2>Returning User</h2>
                <Login/>
            <h2>New User? Create an account here: </h2>
            <button className={GlobalStyles.button} onClick={() => navigate('/Information')}>
                Register
            </button>
            <h2>Admin Controls</h2>
            <AdminVerify/>
        </div> 
        </div>
        
    );
}
export default Welcome;