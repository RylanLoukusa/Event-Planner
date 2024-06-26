import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import GlobalStyles from '../Global.module.css';
import './Dialog.css';

const AuditoriumQuestions = () => {
  const [selectedmovieOption, setSelectedMovieOption] = useState(null);
  const [selectedSeatingOption, setSelectedSeatingOption] = useState(null);
  const [selectedFormatOption, setSelectedFormatOption] = useState(null);
  //const [setCustomers] = useState([]);
  //const [customers, setCustomers] = useState([]);

  const movieOptions = ['Movie playing in the Theater', 'Bringing personal movie'];
  const seatingOptions = [{ label: 'Front two Rows' }, { label: 'Middle of the Auditorium' }, { label: 'Back two rows' }];
  const formatOptions = [{ label: 'DVD' }, { label: 'Blu-Ray' }, { label: 'Laptop' }];

  const handleMovieSelect = (movie) => {
    if (selectedmovieOption === movie) {
      setSelectedMovieOption(null);
    } else {
      setSelectedMovieOption(movie);
    }
    alert(movie);
  };

  const handleSeatingSelect = (selectedOption) => {
    setSelectedSeatingOption(selectedOption);
    alert(selectedOption.label);
  };

  const handleFormatSelect = (selectedOption) => {
    setSelectedFormatOption(selectedOption);
    alert(selectedOption.label);
  };

  // useEffect(() => {
  //   refreshCustomers();
  // }, []);

  //const API_URL = "http://localhost:5092/";

  // const refreshCustomers = async () => {
  //   fetch(API_URL + "api/Web/GetCustomer")
  //     .then(response => response.json())
  //     .then(data => {
  //       setCustomers(data);
  //     });
  // };

  // const addHost = async () => {
  //   // Whatever API connection needs to happen goes here
  // };

  // const goHome = () => {
  //   window.location.href = "/";
  // };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={"Button orange"}>Book Now</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Auditorium Rental</Dialog.Title>
          <Dialog.Description className="DialogDescription">Questionnaire</Dialog.Description>
          <div>
            <div className={GlobalStyles.setup}>
              {movieOptions.map((movie) => (
                <button
                  key={movie}
                  onClick={() => handleMovieSelect(movie)}
                  className={selectedmovieOption === movie ? GlobalStyles.selectedButton : GlobalStyles.selectableButton}
                >
                  {movie}
                </button>
              ))}
            </div>
            {selectedmovieOption && (
              <div>
                {selectedmovieOption === 'Movie playing in the Theater' && (
                  <div>
                    <label className={GlobalStyles.headerText}>Movie Title:</label>
                    <input placeholder='Enter' className={GlobalStyles.input} />
                    <br />
                    <label className={GlobalStyles.headerText}>Seating preference:</label>
                    <Select options={seatingOptions} onChange={handleSeatingSelect} />
                  </div>
                )}

                {selectedmovieOption === 'Bringing personal movie' && (
                  <div>
                    <label className={GlobalStyles.headerText}>Movie Title:</label>
                    <input placeholder='Enter' className={GlobalStyles.input} />
                    <br />
                    <label className={GlobalStyles.headerText}>Format of the movie:</label>
                    <Select options={formatOptions} onChange={handleFormatSelect} />
                    <label className={GlobalStyles.headerText}>Seating preference:</label>
                    <Select options={seatingOptions} onChange={handleSeatingSelect} />
                  </div>
                )}
              </div>
            )}
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
              <Dialog.Close asChild>
                <button className={GlobalStyles.continueButton}>Save changes</button>
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
};

export default AuditoriumQuestions;