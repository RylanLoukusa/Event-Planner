
import { React } from "react";
import Select from 'react-select'
import{useNavigate} from 'react-router-dom';
import styles from "./Information.module.css"
import GlobalStyles from "../Global.module.css";

const InformationSpecial = () => {
    let navigate = useNavigate();
  
    const partyOptions = [
        { value: 'Third Floor Event', label: 'Third Floor' },
        { value: 'Field Trip', label: 'Field Trip' },
        { value: 'Rent an Auditorium', label: 'Auditorium' }
      ]

        return (
            <div className={GlobalStyles.setup}>
                    <h1 className={GlobalStyles.TitleText}>Request a Special Event</h1><br />
                
            <form onSubmit = {() => navigate('/')}>
            <label className={styles.InputPrompt}>First Name</label>
            <input className={styles.Input}/>
                    <label className={styles.InputPrompt}>Last Name</label>
                    <input required className={styles.Input}/>
                    <label className={styles.InputPrompt}>Email</label>
                    <input required className={styles.Input}/>
                    <label className={styles.InputPrompt}>Address</label>
                    <input required className={styles.Input}/>
                    <label className={styles.InputPrompt}>City</label>
                    <input required className={styles.Input}/>
                    <label className={styles.InputPrompt}>State</label>
                    <input required className={styles.Input}/>
                    <label className={styles.InputPrompt}>Zip Code</label>
                    <input required className={styles.Input}/>
                    
                    <label className={styles.Header}>What type of party do you want to request?</label>
                    <Select options={partyOptions} required className="select"/>
                        <br/>
                    <button type='submit' className={styles.buttons} value="Submit">submit</button>
            </form>
                
                </div>
            );

}

export default InformationSpecial;
