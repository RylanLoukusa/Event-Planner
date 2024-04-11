
import { React } from "react";
import "../Styles/Information.css"

const InformationSpecial = () => {
    return (
        <div className="SelectionView">
            <h1 className="title-text">YOUR INFORMATION</h1><br />
        <div>
        <label className="InputPrompt">First Name</label>
            <input id="party" className = "Input" defaultValue="enter"/>
            <label className="InputPrompt">Last Name</label>
            <input id="party" className = "Input" defaultValue="enter"/>
            <label className="InputPrompt">Email</label>
            <input id="party" className = "Input" defaultValue="enter"/>
            <label className="InputPrompt">Address</label>
            <input id="party" className = "Input" defaultValue="enter"/>
            <label className="InputPrompt">City</label>
            <input id="party" className = "Input" defaultValue="enter"/>
            <label className="InputPrompt">State</label>
            <input id="party" className = "Input" defaultValue="enter"/>
            <label className="InputPrompt">Zip Code</label>
            <input id="party" className = "Input" defaultValue="enter"/>
            
            <label className="Header">What type of party do you want to request?</label>
            <select>
                <option id="inputSpecial">select</option>
                <option id="inputSpecial">Field Trip</option>
                <option id="inputSpecial">Third Floor Event</option>
                <option id="inputSpecial">Book an Auditorium</option>
            </select>
        </div>
            
                <br/>
            <button className="buttons">Submit</button>
        </div>
    );
}

export default InformationSpecial;
