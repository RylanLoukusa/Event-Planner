import React from 'react';
import { Component } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useNavigate } from 'react-router-dom';
import { Cross2Icon } from '@radix-ui/react-icons';
import '../Admin/Dialog.css';
import GlobalStyles from '../Global.module.css';


class Login extends Component{
     API_URL = "http://localhost:5092/";

    async checkCustomer() {
      var user= ((document.getElementById("username")||{}).value)||"";
      var pass= ((document.getElementById("passcode")||{}).value)||"";
    
      var hasUsername = false;
      var hasPasscode = false;
    
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
          }
        }
      }

      if (!hasUsername || !hasPasscode)
      {
        alert("Username or password does not match");
        return;
      }
    
      window.location.href = "/Home";
      return;
      //this.props.navigate('/Date');
    };    

  render(){
    //let navigate = useNavigate();
    return(
        <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={GlobalStyles.button}>Login</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      {/* <Dialog.Overlay className="DialogOverlay" /> */}
      <Dialog.Content className={"DialogContent"}>
        <Dialog.Title className={GlobalStyles.titleText}>Login</Dialog.Title>
        <fieldset className="Fieldset">
          <label className={GlobalStyles.inputPrompt}> Username: </label>
          <input required id='username' placeholder='Enter' className={GlobalStyles.input}/>
        </fieldset>  
        <fieldset className="Fieldset">
            <label className={GlobalStyles.inputPrompt}> Password: </label>
            <input required id='passcode' placeholder='Enter' type="password" className={GlobalStyles.input}/> 
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button onClick={() => this.checkCustomer()}className={GlobalStyles.specialButton} type='submit'>Save changes</button>
          </Dialog.Close>
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
};

export default Login;