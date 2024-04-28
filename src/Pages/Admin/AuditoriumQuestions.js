import React, { useState } from 'react';
import Select from 'react-select'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import GlobalStyles from '../Global.module.css'
import './Dialog.css'; 

const AuditoriumQuestions = () => {

  const [selectedmovieOption, setSelectedMovieOption] = useState(null);
  
  const movieOptions = ['Movie playing in the Theater', 'Bringing personal movie'];
  const seatingOptions = [{label:'Front two Rows'},{label:'Middle of the Auditorium'}, {label:'Back two rows'}];
  const formatOptions = [{label:'DVD'}, {label:'Blu-Ray'},{label:'Laptop'} ];
 const handleMovieSelect = (movie)=> {
  if (selectedmovieOption === movie) {
    setSelectedMovieOption(null);
  } else {
    setSelectedMovieOption(movie);
  }
};
 
 
  return(
    <Dialog.Root>
    <Dialog.Trigger asChild >
      <button className={"Button orange"}>Book Now</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      {/* <Dialog.Overlay className="DialogOverlay" /> */}
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Auditorium Rental</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Questionnaire
        </Dialog.Description>
        <div>
        <div className={GlobalStyles.setup}>
        {movieOptions.map((movie) => (
          <button
            key={movie}
            onClick={() => handleMovieSelect(movie)}
            className={selectedmovieOption === movie ? GlobalStyles.selectedButton : GlobalStyles.button}
          >
            {movie}
          </button>
        ))}
        </div>
        {selectedmovieOption && (
        <div >
          {selectedmovieOption === 'Movie playing in the Theater' && (
            <div>
             <label className={GlobalStyles.headerText}>
              Movie Title:
             </label>
             <input placeholder='Enter'className={GlobalStyles.input}/>
             <br/>
             <label className={GlobalStyles.headerText}>
              Seating preference:
             </label>
             <Select options={seatingOptions}/>
            </div>
          )}
          
          {selectedmovieOption === 'Bringing personal movie' && (
            <div>
              <label className={GlobalStyles.headerText}>
              Movie Title:
             </label>
             <input placeholder='Enter'className={GlobalStyles.input}/>
             <br/>
              <label className={GlobalStyles.headerText}>
                Format of the movie:
              </label>
              <Select options={formatOptions}/>
              <label className={GlobalStyles.headerText}>
              Seating preference:
             </label>
             <Select options={seatingOptions}/>
            </div>
          )}
          </div>
        )}
        
        
       
        
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