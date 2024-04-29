import React from 'react';
import { Component } from 'react';
//import { useNavigate } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import GlobalStyles from '../Global.module.css';
import './Dialog.css';

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
    for (var j=0; j < fetchedData.length; j++)
    {
      if (fetchedData[j].Last_name === lname)
      {
        hasLName = true;
      }
    }
    for (var k=0; k < fetchedData.length; k++)
    {
      if (fetchedData[k].passcode === pass)
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
    //const{adVerify}=this.state;
      return (
        
        <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={GlobalStyles.button}>Login as Admin</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="DialogContent">
          <Dialog.Title ><img src={'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w'} 
            alt="Logo" style={{ width: '400px', height: '225px' }} /></Dialog.Title>
          <Dialog.Description className={GlobalStyles.descriptionText}>In order to continue please enter your credentials</Dialog.Description>
          <div className={GlobalStyles.setup}>
          <div className={GlobalStyles.page}>
            

            <label className={GlobalStyles.inputPrompt}>First Name</label>
            <input required className={GlobalStyles.input} id="fname" placeholder="First Name"  />

            <label className={GlobalStyles.inputPrompt}>Last Name</label>
            <input required className={GlobalStyles.input} id="lname" placeholder="Last Name"  />

            <label className={GlobalStyles.inputPrompt}>Passcode</label>
            <input required className={GlobalStyles.input} id="passcode" placeholder="Passcode" type="password"  />
        <Dialog.Close asChild>
            <button className={GlobalStyles.button} onClick={()=>this.checkAdmin()} value="Submit" >Submit</button>
        </Dialog.Close>
          </div>
        </div>

          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
        
      );
   }
}
export default AdminVerify;
