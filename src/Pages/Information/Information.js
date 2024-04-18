import { useNavigate } from 'react-router-dom';
import { React } from "react";
import GlobalStyles from "../Global.module.css";

const Information = () => {
    let navigate = useNavigate();

    return (
        <div>
        <div className={GlobalStyles.setup}>
            
                <form className={GlobalStyles.page} onSubmit = {() => navigate('/Date')}>
                <h1 className={GlobalStyles.titleText}>YOUR INFORMATION</h1><br />

                <label className={GlobalStyles.inputPrompt}>First Name</label>
                    <input required placeholder="Enter" className={GlobalStyles.input}/>
                    <label className={GlobalStyles.inputPrompt}>Last Name</label>
                    <input required placeholder="Enter" className={GlobalStyles.input}/>
                    <label className={GlobalStyles.inputPrompt}>Email</label>
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
                

                
                <button type="submit" className={GlobalStyles.button}>Continue</button>

                <button className={GlobalStyles.specialButton} onClick={()=> navigate('/')}>Change or Cancel</button>
            </form>
        </div>
    </div>    
    );
}

export default Information;
