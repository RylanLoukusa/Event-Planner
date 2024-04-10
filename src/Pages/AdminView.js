import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import '../Styles/AdminView.css';

const HostDialog = () => (
  <Dialog.Root>
    <Dialog.Trigger>
      <button className='buttons'>Add a host </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay classname='DialogOverlay' />
      <Dialog.Content className='DialogContent'>
        <Dialog.Title className='Dialog Title'>Add a host</Dialog.Title>
        <Dialog.Description className='DialogDescription'>Add a host to any party here. Click save when done</Dialog.Description>
        <fieldset className='Fieldset'>
          <label className='InputPrompt'> Party Name </label>
          <input className='Input' id='Party' defaultValue='Enter party' />
        </fieldset>
        <fieldset className='Fieldset'>
          <label className='InputPrompt'>Host First Name</label>
          <input className='Input' id='HostFirst' defaultValue='First Name' />
        </fieldset>
        <fieldset>
          <label className='InputPrompt'>Host Last Name</label>
          <input className='Input' id='HostLast' defaultValue='Last Name' />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className='buttons'>Save changes</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className='IconButton' aria-label='Close'>
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

const AdminView = () => {
  return (
    <div>
      <div className='setup'>
        <div>
          <HostDialog />
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
