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

    var user= ((document.getElementById("username")||{}).value)||"";
    var pass= ((document.getElementById("passcode")||{}).value)||"";
  
    var hasUsername = false;
    var hasPasscode = false;
    var hasAdmin = false;
  
    const response = await fetch(this.API_URL+"api/Web/GetCustomer");
    const fetchedData = await response.json();
    
    for (var i=0; i < fetchedData.length; i++)
    {
      if (fetchedData[i].username === user)
      {
        hasUsername = true;
        if (fetchedData[i].passcode === pass)
        {
          hasPasscode = true;
          if (fetchedData[i].isAdmin)
          {
            hasAdmin = true;
          }
        }
      }
    }

    if (!hasUsername || !hasPasscode)
    {
      alert("Username or password does not match");
      return;
    }
    if (!hasAdmin)
    {
      alert("User is not an admin");
      return;
    }

    window.location.href = "/AdminView";
    return;
    //this.props.navigate('/Date');
  };

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
            

            <label className={GlobalStyles.inputPrompt}>Username</label>
            <input required className={GlobalStyles.input} id="username" placeholder="First Name"  />

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
