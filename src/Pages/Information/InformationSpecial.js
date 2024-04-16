
import { React } from "react";
import Select from 'react-select'
import{useNavigate} from 'react-router-dom';
import GlobalStyles from "../Global.module.css";

const InformationSpecial = () => {
    let navigate = useNavigate();
  
    const partyOptions = [
        { value: 'Third Floor Event', label: 'Third Floor' },
        { value: 'Field Trip', label: 'Field Trip' },
        { value: 'Rent an Auditorium', label: 'Auditorium' }
      ]
      const logo = 'https://images.squarespace-cdn.com/content/v1/5de7be825321a1256af4048a/1665833573454-FPP4JCI5QMBVAJU0MTTI/st-michael-cinema.jpg?format=500w';

        return (

            <div className={GlobalStyles.setup}>
                <img src={logo}/>
                
            <form className={GlobalStyles.page}onSubmit = {() => navigate('/')}>
                <h1 className={GlobalStyles.titleText}>Request a Special Event</h1><br />

                    <label className={GlobalStyles.inputPrompt}>First Name</label>
                    <input required placeholder="Enter" className={GlobalStyles.input}/>
                    <label className={GlobalStyles.inputPrompt}>Last Name</label>
                    <input required placeholder="Enter" className={GlobalStyles.input}/>
                    <label className={GlobalStyles.inputPrompt}>Email</label>
                    <input required placeholder="Enter" className={GlobalStyles.input}/>
                    <label className={GlobalStyles.inputPrompt}>Address</label>
                    <input required placeholder="Enter" className={GlobalStyles.input}/>
                    <label className={GlobalStyles.inputPrompt}>City</label>
                    <input required placeholder="Enter" className={GlobalStyles.input}/>
                    <label className={GlobalStyles.inputPrompt}>State</label>
                    <input required placeholder="Enter" className={GlobalStyles.input}/>
                    <label className={GlobalStyles.inputPrompt}>Zip Code</label>
                    <input required placeholder="Enter" className={GlobalStyles.input}/>
                    
                    <label className={GlobalStyles.inputPrompt}>What type of party do you want to request?</label>
                    <Select options={partyOptions} required className="select"/>
                        <br/>
                    <button type='submit' className={GlobalStyles.button} value="Submit">submit</button>
            </form>
                
                </div>
            );

}

export default InformationSpecial;
