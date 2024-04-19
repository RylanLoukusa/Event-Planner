import React from 'react';
import { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyles from '../Global.module.css'

class AdminVerify extends Component{

  constructor(props){
    super(props);
    this.state={
    admins:[]
    }
  }

//5038 is other url
API_URL="http://localhost:5092/";

async checkAdmin(){
    var fname= ((document.getElementById("fname")||{}).value)||"";
    var lname= ((document.getElementById("lname")||{}).value)||"";
    var pass= ((document.getElementById("passcode")||{}).value)||"";

    var hasFName = false;
    var hasLName = false;
    var hasPasscode = false;

    const response = await fetch(this.API_URL+"api/Web/GetAdmin");
    const fetchedData = await response.json();
    
    for (var i=0; i < fetchedData.length; i++)
    {
      if (fetchedData[i].First_name === fname)
      {
        hasFName = true;
      }
    }
    for (var i=0; i < fetchedData.length; i++)
    {
      if (fetchedData[i].Last_name === lname)
      {
        hasLName = true;
      }
    }
    for (var i=0; i < fetchedData.length; i++)
    {
      if (fetchedData[i].passcode === pass)
      {
        hasPasscode = true;
      }
    }

    if (!hasFName || !hasLName || !hasPasscode)
    {
      alert("First name, last name, or password does not match");
      return;
    }

    window.location.href = "/AdminView";
    return;
    //this.props.navigate('/Date');
}

  render(){
    const{adVerify}=this.state;
      return (
        <div className={GlobalStyles.setup}>
          <div className={GlobalStyles.page}>
            <img src={'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w'} 
            alt="Logo" style={{ width: '400px', height: '225px' }} />
            <h1 className={GlobalStyles.headerText}>In order to continue please enter your credentials</h1>

            <label className={GlobalStyles.inputPrompt}>First Name</label>
            <input required className={GlobalStyles.input} id="fname" placeholder="First Name"  />

            <label className={GlobalStyles.inputPrompt}>Last Name</label>
            <input required className={GlobalStyles.input} id="lname" placeholder="Last Name"  />

            <label className={GlobalStyles.inputPrompt}>Passcode</label>
            <input required className={GlobalStyles.input} id="passcode" placeholder="Passcode" type="password"  />

            <button className={GlobalStyles.button} onClick={()=>this.checkAdmin()} value="Submit" >Submit</button>
          </div>
        </div>
      );
   }
}
export default AdminVerify;
