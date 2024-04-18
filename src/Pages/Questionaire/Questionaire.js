import QuestionnaireTextField from '../../Components/QuestionnaireTextField.jsx';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

import { React } from 'react';
import GlobalStyles from '../Global.module.css';


const seatingOptions = [
  { value: 'Front', label: 'Front two rows' },
  { value: 'Middle', label: 'Middle of the auditorium' },
  { value: 'Back', label: 'Back two rows' }
]

const Questionaire = () => {
  let navigate = useNavigate();
  return (
    <div className={GlobalStyles.setup}>
      <form onSubmit={() => navigate('/Summary')} className={GlobalStyles.page}>
        <h1 className={GlobalStyles.titleText}>Questionnaire</h1>
        <label className={GlobalStyles.inputPrompt}>What is your birthday child's name and age? </label>
        <input required placeholder='Enter' className={GlobalStyles.input}/>
        <label className={GlobalStyles.inputPrompt}>How old is the birthday child?</label>
        <input required placeholder='Enter' className={GlobalStyles.input}/>
        <label className={GlobalStyles.inputPrompt}>How many children will be attending the event? </label>
        <input required placeholder='Enter' className={GlobalStyles.input}/>
        <label className={GlobalStyles.inputPrompt}>How many adults will be attending the event?</label>
        <input required placeholder='Enter' className={GlobalStyles.input}/>
        <label className={GlobalStyles.inputPrompt}>What movie would you like to see?</label>
        <input required placeholder='Enter' className={GlobalStyles.input}/>
        <label className={GlobalStyles.inputPrompt}>What is you seating preference?</label>
        <Select options={seatingOptions} required/>
        <label className={GlobalStyles.inputPrompt}>Any questions or concerns the Cinema should know about?</label>
        <input placeholder='Enter' className={GlobalStyles.input}/>

        <button className={GlobalStyles.button} type='submit'>
          View booking summary
        </button>
        <p>Booking TIME on DATE</p>
      
        <button className={GlobalStyles.specialButton} onClick={() => navigate('/')}>
          Change or Cancel
        </button>
      </form>
    </div>
  );
};

export default Questionaire;
