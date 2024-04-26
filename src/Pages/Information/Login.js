import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useNavigate } from 'react-router-dom';
import { Cross2Icon } from '@radix-ui/react-icons';
import '../Admin/Dialog.css';
import GlobalStyles from '../Global.module.css';


const Login = () => {
    let navigate = useNavigate();
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
          <input required placeholder='Enter' className={GlobalStyles.input}/>
        </fieldset>  
        <fieldset className="Fieldset">
            <label className={GlobalStyles.inputPrompt}> Password: </label>
            <input required placeholder='Enter' className={GlobalStyles.input}/> 
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button onClick={() => navigate('/Home')}className={GlobalStyles.specialButton} type='submit'>Save changes</button>
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

export default Login;