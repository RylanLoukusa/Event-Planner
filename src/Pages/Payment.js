import React from 'react';
import { useNavigate } from 'react-router-dom';

import "../Styles/Payment.css"

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
    <div className="payment-screen">
      <h1 className="payment-header">St. Michael Cinema</h1>
      <div style={{ overflowY: 'scroll' }}>
        <p className="payment-info">
          PAYMENT {'\n'}
          'room selection' {'\n'}
          'meal deal selection with any add-ons selected'
        </p>
        <div className="setup">
          <button onClick={onNoTipPress} className="buttons">No TIP</button>
          <button onClick={_5percentPress} className="buttons">5%</button>
          <button onClick={_10percentPress} className="buttons">10%</button>
          <button onClick={_20percentPress} className="buttons">20%</button>
          <button onClick={customTip} className="buttons">Custom TIP</button>
        </div>
        <p className="payment-due">Payment due today</p>
        <p className="remaining-balance">You have a remaining balance of ___ due by your booking date. You will receive an email when your payment is due.</p>
        
        <input className="input" placeholder="Card number" />
        <input className="input" placeholder="MM/YY" />
        <input className="input" placeholder="CVV" />
        <button className="buttons">
          <span className="button-text">Process my Payment and Book my Event</span>
        </button>
      </div>
    </div>
  );
}

export default Payment;
