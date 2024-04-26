import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './Dialog.css';
import Select from 'react-select';
import GlobalStyles from '../Global.module.css';

const seatingOptions = [{label:'Front two Rows'},{label:'Middle of the Auditorium'}, {label:'Back two rows'}];

const FieldTripQuestions = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button orange">Book Now</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      {/* <Dialog.Overlay className="DialogOverlay" /> */}
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Field Trip</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Questionnaire
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className={GlobalStyles.descriptionText} htmlFor="party">
          Business/organization name?  
          </label>
          <input className={GlobalStyles.input} id="party" defaultValue="enter" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className={GlobalStyles.descriptionText} htmlFor="attendance">
            Expected Attendance  
          </label>
          <input className={GlobalStyles.input} id="attendance" defaultValue="enter" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className={GlobalStyles.descriptionText} htmlFor="movie">
            What movie will they watch?  
          </label>
          <input className={GlobalStyles.input} id="movie" defaultValue="enter" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className={GlobalStyles.descriptionText}>
            Seating preference:
          </label>
          <Select options={seatingOptions}/>
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className="Button green">Save changes</button>
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

export default FieldTripQuestions;