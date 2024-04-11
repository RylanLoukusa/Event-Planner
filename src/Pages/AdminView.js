import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

import '../Styles/AdminView.css';

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="buttons">Add a Host</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay/>
      <Dialog.Content>
        <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
        <Dialog.Description className="header">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <fieldset >
          <label className="InputPrompt" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset >
          <label className="InputPrompt" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className="buttons">Save changes</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="buttons" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

const AdminView = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div className='setup'>
        <div>
          <DialogDemo/>
          <p> Date </p>
          <p> Party name and type </p>
        </div>
      </div>
      <div className='setup'>
        <h1 className='title-text'>What kind of booking do you require?</h1>
        <div className='selection-view'>
          <h2 className='header'>Auditorium Rental</h2>
          <button onClick={() => navigate('/AuditoriumQuestions')} className='buttons'>
            <span className='button-text'>Book Now</span>
          </button>

          <h2 className='header'>Third Floor Event</h2>
          <button onClick={() => navigate('/ThirdFloorQuestions')} className='buttons'>
            <span className='button-text'>Book Now</span>
          </button>

          <h2 className='header'>Field Trip</h2>
          <button onClick={() => navigate('/FieldTripQuestions')} className='buttons'>
            <span className='button-text'>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdminView;
// export { UpcomingEvents, PastEvents, CreateEvents }; // Export components for routing

// Drawer and navigation setup omitted for brevity
