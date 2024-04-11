
import { React, useState } from "react";
import "../Styles/Information.css"

const InformationSpecial = () => {
    const [first_name, setfirst_Name] = useState('');
    const [last_name, setlast_Name] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZIPCode] = useState('');
    const handleSubmit = (e) => {
    
        e.preventDefault();

        console.log(`Form submitted, ${first_name}, ${last_name}, ${email}, ${address}, ${city}, ${state}, ${zipCode}`);    

    }
  
        return (
            <div className="SelectionView">
                    <h1 className="title-text">Request a Special Event</h1><br />
                
            <form onSubmit = {handleSubmit}>
            <label className="InputPrompt">First Name</label>
                    <input className="Input" onChange = {(e) => setfirst_Name(e.target.value)} value = {first_name}></input>
                    <label className="InputPrompt">Last Name</label>
                    <input className="Input" onChange = {(e) => setlast_Name(e.target.value)} value = {last_name}></input>
                    <label className="InputPrompt">Email</label>
                    <input className="Input" onChange = {(e) => setEmail(e.target.value)} value = {email}></input>
                    <label className="InputPrompt">Address</label>
                    <input className="Input" onChange = {(e) => setAddress(e.target.value)} value = {address}></input>
                    <label className="InputPrompt">City</label>
                    <input className="Input" onChange = {(e) => setCity(e.target.value)} value = {city}></input>
                    <label className="InputPrompt">State</label>
                    <input className="Input" onChange = {(e) => setState(e.target.value)} value = {state}></input>
                    <label className="InputPrompt">Zip Code</label>
                    <input className="Input" onChange = {(e) => setZIPCode(e.target.value)} value = {zipCode}></input>
                    
                    <label className="Header">What type of party do you want to request?</label>
                    <select required = "required">
                        <option id="inputSpecial">select</option>
                        <option id="inputSpecial">Field Trip</option>
                        <option id="inputSpecial">Third Floor Event</option>
                        <option id="inputSpecial">Book an Auditorium</option>
                    </select>
                        <br/>
                    <button type='submit' className="buttons">submit</button>
            </form>
                
                </div>
            );

}

export default InformationSpecial;
