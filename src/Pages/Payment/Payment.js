import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from "./Payment.css";
import GlobalStyles from "../Global.module.css";

const Payment = () => {
  let navigate = useNavigate();
  // Tip adding buttons
  const onNoTipPress = () => {
    alert("You chose not to tip.");
  }
  const _5percentPress = () => {
    alert("Thank you! Your tip will be added to your total.");
  }
  const _10percentPress = () => {
    alert("Thank you! Your tip will be added to your total.");
  }
  const _20percentPress = () => {
    alert("Thank you! Your tip will be added to your total.");
  }
  const customTip = () => {
    alert("How much would you like to tip?");
  }

  return (
    <div className={GlobalStyles.setup}>
      <h1 className={GlobalStyles.titleText}>St. Michael Cinema</h1>
      <div style={{ overflowY: 'scroll' }}>
        <p className={styles.paymentInfo}>
          PAYMENT {'\n'}
          'room selection' {'\n'}
          'meal deal selection with any add-ons selected'
        </p>
        <div>
          <button onClick={onNoTipPress} className={GlobalStyles.button}>No TIP</button>
          <button onClick={_5percentPress} className={GlobalStyles.button}>5%</button>
          <button onClick={_10percentPress} className={GlobalStyles.button}>10%</button>
          <button onClick={_20percentPress} className={GlobalStyles.button}>20%</button>
          <button onClick={customTip} className={GlobalStyles.button}>Custom TIP</button>
        </div>
        <p className={styles.paymentDue}>Payment due today</p>
        <p className={styles.remainingBalance}>You have a remaining balance of ___ due by your booking date. You will receive an email when your payment is due.</p>
        
        <input className={GlobalStyles.input} placeholder="Card number" /><br/>
        <input className={GlobalStyles.input} placeholder="MM/YY" /><br/>
        <input className={GlobalStyles.input} placeholder="CVV" /><br/>
        <button className={GlobalStyles.button}>
          <span>Process my Payment and Book my Event</span>
        </button>
      </div>
    </div>
  );
}

export default Payment;
