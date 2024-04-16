import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import GlobalStyles from '../Global.module.css'

import './Dialog.css'; // Make sure the path to your CSS file is correct

const AuditoriumQuestions = () => (
  <Dialog.Root>
  <Dialog.Trigger asChild >
    <button className={"Button orange"}>Book Now</button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay className="DialogOverlay" />
    <Dialog.Content className="DialogContent">
      <Dialog.Title className="DialogTitle">Auditorium Rental</Dialog.Title>
      <Dialog.Description className="DialogDescription">
        Questionnaire
      </Dialog.Description>
      <div>
      <label className={GlobalStyles.headerText}>What movie would you like to see?</label>
      
        <select>
          <option value="default">Select </option>
          <option value="whereMovie">Movie Currently available in the theater</option>
          <option value="whereMovie">Bringing a movie from home</option>
        </select>
      <br/>
      <br/>
      <input className="Input" id="movie" defaultValue="enter movie title" />
      <label className={GlobalStyles.headerText}>If selected, bringing a movie from home, what format is the movie?</label>
        <select>
          <option value="default">Select </option>
          <option value="format">DVD</option>
          <option value="format">Blu-Ray</option>
          <option value="format">Laptop</option>
        </select>
        
        <label className={GlobalStyles.headerText}>What is the expected attendence for the event?</label>
      <input className="Input" id="attendance" placeholder="Enter"/>

     
      <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
        <Dialog.Close asChild>
          <button className="Button">Save changes</button>
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

export default AuditoriumQuestions;