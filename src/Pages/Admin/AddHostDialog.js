import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './Dialog.css';

const AddHost = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button Brown">Add A Host</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Add A Host</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="party">
            Party Name
          </label>
          <input className="Input" id="party" defaultValue="enter party name" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="first name">
            First Name
          </label>
          <input className="Input" id="first name" defaultValue="enter first name" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="last name">
            Last Name
          </label>
          <input className="Input" id="last name" defaultValue="enter last name" />
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

export default AddHost;