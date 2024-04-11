import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import '../Styles/Dialog.css';

const ThirdFloorQuestions = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button orange">Book Now</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Third Floor Event</Dialog.Title>
        <Dialog.Description className="DialogDescription">
            Questionnaire
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="party">
          Business/organization name?
          </label>
          <input className="Input" id="party" defaultValue="enter" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="attendance">
            Expected Attendance
          </label>
          <input className="Input" id="attendance" defaultValue="enter" />
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

export default ThirdFloorQuestions;