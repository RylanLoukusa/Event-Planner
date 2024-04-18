import React, { useRef, useState, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { useNavigate } from "react-router-dom";
import GlobalStyles from '../Global.module.css'
import styles from './Contract.module.css';

const Contract = ()  =>  {
  let navigate = useNavigate();
   
    const sigRef = useRef();
  const [signature, setSignature] = useState(null);
  const handleSignatureEnd = () => {
    setSignature(sigRef.current.toDataURL());
  }
  const clearSignature = () => {
    sigRef.current.clear();
    setSignature(null);
  }

  useEffect(() => {
    console.log(signature);
  }, [signature]);

  return (
     <div>
      <h1 className={GlobalStyles.titleText}>Contract</h1>
      <h2 className={GlobalStyles.headerText}>
        Timing of Event
      </h2>
      <p>The Host agrees to begin the event not before the scheduled time and agrees to vacate the designated function space at the closing hour indicated.</p>
      <h2 className={GlobalStyles.headerText}>
        Guaranteed Attendance
      </h2>
      <p>We ask you to confirm the total number of guests that will be attending at least Ten (10) days prior to the date of your event. The attendance figure you provide by this date will be the guaranteed minimum and cannot be reduced. If you do not provide a final attendance figure by this date, then the expected number of attendees the Host provided above will be used for preparation, staffing, calculation of the final per-person charges, and food quantities for the Host’s event.</p>
      <h2 className={GlobalStyles.headerText}>Confirmation of Event</h2>
      <p>St. Michael Cinema must receive final menu selections, room arrangements and other details at least 10 days prior to the Host’s event. Menu pricing can be guaranteed up to ninety (90) days prior to the Host’s event. You acknowledge that there may be price increases to your chosen menu due to unforeseen circumstances at the time of the event. After the Host provides St. Michael Cinema with the final selections and arrangements, St. Michael Cinema will present the Host with an itemized invoice confirming the specific requirements of the Host’s event. Please notify St. Michael Cinema within 72 hours of any discrepancies between the final selections and arrangements the Host provided to St. Michael Cinema and the itemized invoice provided. St. Michael Cinema is not responsible for any discrepancies that are not immediately brought to St. Michael Cinema’s attention. Additionally, St. Michael Cinema is not liable for any damages related to food allergies of the Host or any of the guests in attendance.</p>
      <h2 className={GlobalStyles.headerText}>Final Account of Charges</h2>
      <p>This Final Account of Charges may or may not apply to the Host’s specific event if the Host did not have any additional upgrades or event-day purchases. This charge will be e-mailed to the Host within 24 hours of the event for final payment that lists the final charges due and owing. The Host is responsible for full payment of the final charges upon reciept.</p>
      <h2 className={GlobalStyles.headerText}>Tax and Service Charge</h2>
      <p>All food, beverage and some other services provided by St. Michael Cinema are subject to a service charge of 18% which will be included in the estimate payment and final account of charges. The Host is responsible for the payment of all state sales tax incurred in connection with the event. Food, beverage, service charge and room fees may be taxable. If the Host is a tax exempt organization, please provide St. Michael Cinema with proof of Sales and Use Tax Exemption, which must be presented to St. Michael Cinema at the time of Contract Signing. If this Certificate is not returned along with the executed Contract, sales tax will be charged.</p>
      <hr/>
      <label className={GlobalStyles.descriptionText}>By signing below you acknowledge and accept the terms and regulations of the St. Michael Cinema</label>
      <SignatureCanvas 
        canvasProps={{ className: styles.signature }}
        ref={sigRef}
        onEnd={handleSignatureEnd}
      />
      <button className={GlobalStyles.specialButton} onClick={clearSignature}>Clear</button>
      <button className={GlobalStyles.button}type="button" onClick={() => navigate('/Payment')}>Continue</button>
  </div>
  );
}

export default Contract;