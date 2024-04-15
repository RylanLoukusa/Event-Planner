import QuestionnaireTextField from '../../Components/QuestionnaireTextField.jsx';
import { useNavigate } from 'react-router-dom';
import { Select } from 'react-select';

import { React } from 'react';
import GlobalStyles from '../Global.module.css';

const Questionaire = () => {
  let navigate = useNavigate();
  return (
    <div className={GlobalStyles.setup}>
      <form onSubmit={() => navigate('/Summary')}>
        <h1 className={GlobalStyles.titleText}>Questionnaire</h1>
        <label className={GlobalStyles.inputPrompt}>What is your birthday child's name and age? </label>
        <input required placeholder='Enter' />
        <label className={GlobalStyles.inputPrompt}>How many children will be attending the event? </label>
        <input required placeholder='Enter' />
        <label className={GlobalStyles.inputPrompt}>How many adults will be attending the event?</label>
        <input required placeholder='Enter' />
        <label className={GlobalStyles.inputPrompt}>What movie would you like to see?</label>
        <input required placeholder='Enter' />

        <Select />

        <QuestionnaireTextField label='Additional Questions (optional)' />

        <button className={GlobalStyles.button} type='submit'>
          View booking summary
        </button>
      </form>

      <p>Booking TIME on DATE</p>

      <button className={GlobalStyles.specialButton} onClick={() => navigate('/')}>
        Change or Cancel
      </button>
    </div>
  );
};

export default Questionaire;
