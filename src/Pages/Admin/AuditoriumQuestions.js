import React, { useState } from 'react';
import Select from 'react-select'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import GlobalStyles from '../Global.module.css'

import './Dialog.css'; // Make sure the path to your CSS file is correct

const AuditoriumQuestions = () => {

  const [selectedmovieOption, setSelectedMovieOption] = useState(null);
  const movieOptions = [{value: 'movieoption1', label:'Movie playing in the Theater'}, {value: 'movieoption2', label:'Bringing personal movie'}];
  const seatingOptions = [{value:'seatoption1', label:'Front two Rows'},{value:'seatoption2', label:'Middle of the Auditorium'},{value:'seatoption3', label:'Back two rows'}]
  return(
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
        <label className={GlobalStyles.headerText}>Movie Select</label>
        <Select options={movieOptions} />
          <br/>
      <label className={GlobalStyles.headerText}>What movie would you like to see?</label>
        <input className={GlobalStyles.input} placeholder="Enter"/>
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
  )
  
};

export default AuditoriumQuestions;