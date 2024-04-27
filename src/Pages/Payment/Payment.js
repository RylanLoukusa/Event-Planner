import React from 'react';
import { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkout from './Checkout/Checkout';

import styles from "./Payment.module.css";
import GlobalStyles from "../Global.module.css";

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
  alert("How much would you like to tip?"); // add user input box
}

class Payment extends Component{
    constructor(props){
      super(props);
      this.state={
      Generic_party:[]
      }
  }
  
  //5038 is other url
  API_URL="http://localhost:5092/";
  
  componentDidMount(){
      this.refreshGenericParty();
  }
  
  async refreshGenericParty(){
    fetch(this.API_URL+"api/Web/GetGenericParty").then(response=>response.json())
    .then(data=>{
    this.setState({Generic_party:data});
    })
  }

  async goContract(){
      window.location.href = "/Contract"
  }
  async goConfirmation(){
    window.location.href = "/Confirmation"
  }
  async goHome(){
    window.location.href = "/"
  }
  

    //let navigate = useNavigate();
    // Tip adding buttons

    render(){
      const{Generic_party}=this.state;
      return (
        <div className={GlobalStyles.setup}>
          <div className={GlobalStyles.page}>
            <button className={GlobalStyles.backButton}type="button" onClick={() => this.goContract()}>Back</button>
            <h1 className={GlobalStyles.titleText}>Payment</h1>
            <div style={{ overflowY: 'scroll' }}>
              {/* <p className={styles.paymentInfo}>
                PAYMENT {'\n'}
                'room selection' {'\n'}
                'meal deal selection with any add-ons selected'
              </p> */}
              <div>
                <button onClick={onNoTipPress} className={GlobalStyles.button}>No TIP</button>
                <button onClick={_5percentPress} className={GlobalStyles.button}>5%</button>
                <button onClick={_10percentPress} className={GlobalStyles.button}>10%</button>
                <button onClick={_20percentPress} className={GlobalStyles.button}>20%</button>
                <button onClick={customTip} className={GlobalStyles.button}>Custom TIP</button>
              </div>
              <p className={styles.paymentDue}>Payment due today: &nbsp;&nbsp;
              {Generic_party.map(Generic_party=>
                  <b>${Generic_party.price}</b>
              )}</p>
              {/* <p className={styles.remainingBalance}>You have a remaining balance of ___ due by your booking date. You will receive an email when your payment is due.</p> */}
            </div>
            <Checkout />
            <button className={GlobalStyles.button}type="button" onClick={() => this.goConfirmation()}>Continue</button>
          </div>
        </div>
      );
    };
}


export default Payment;
