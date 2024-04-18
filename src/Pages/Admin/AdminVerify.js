import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyles from '../Global.module.css'
const AdminVerify = () => {
  let navigate = useNavigate();
  const logo = 'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w';


  return (
    <div className={GlobalStyles.setup}>
      

      <form className={GlobalStyles.page} onSubmit={() => navigate('/AdminView')}>
        <img src={logo} alt="Logo" style={{ width: '400px', height: '225px' }} />
        <h1 className={GlobalStyles.headerText}>Enter your credentials</h1>

        <label className={GlobalStyles.inputPrompt}>First Name</label>
        <input required className={GlobalStyles.input} placeholder="First Name"  />

        <label className={GlobalStyles.inputPrompt}>Last Name</label>
        <input required className={GlobalStyles.input} placeholder="Last Name"  />

        <label className={GlobalStyles.inputPrompt}>Passcode</label>
        <input required className={GlobalStyles.input} placeholder="Passcode" type="password"  />

        <button className={GlobalStyles.button} type="submit" value="Submit" >Submit</button>
      </form>
    </div>
  );
}

export default AdminVerify;
