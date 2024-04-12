
import { React } from "react";
import Select from 'react-select'
import{useNavigate} from 'react-router-dom';
import "../Styles/Information.css"

const InformationSpecial = () => {
    let navigate = useNavigate();
  
    const partyOptions = [
        { value: 'Third Floor Event', label: 'Third Floor' },
        { value: 'Field Trip', label: 'Field Trip' },
        { value: 'Rent an Auditorium', label: 'Auditorium' }
      ]

        return (
            <div className="SelectionView">
                    <h1 className="TitleText">Request a Special Event</h1><br />
                
            <form onSubmit = {() => navigate('/')}>
            <label className="InputPrompt">First Name</label>
            <input className="Input"/>
                    <label className="InputPrompt">Last Name</label>
                    <input required className="Input"/>
                    <label className="InputPrompt">Email</label>
                    <input required className="Input"/>
                    <label className="InputPrompt">Address</label>
                    <input required className="Input"/>
                    <label className="InputPrompt">City</label>
                    <input required className="Input"/>
                    <label className="InputPrompt">State</label>
                    <input required className="Input"/>
                    <label className="InputPrompt">Zip Code</label>
                    <input required className="Input"/>
                    
                    <label className="Header">What type of party do you want to request?</label>
                    <Select options={partyOptions} required className="select"/>
                        <br/>
                    <button type='submit' className="buttons" value="Submit">submit</button>
            </form>
                
                </div>
            );

}

export default InformationSpecial;
