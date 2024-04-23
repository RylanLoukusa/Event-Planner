import React, { useRef, useState, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { useNavigate } from "react-router-dom";
import GlobalStyles from '../Global.module.css';
import styles from './Contract.module.css'

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
     <div className={GlobalStyles.setup}>
        <div className={GlobalStyles.page}>
          <button className={GlobalStyles.backButton}type="button" onClick={() => navigate('/Summary')}>Back</button>
          <h1 className={GlobalStyles.titleText}>Contract</h1>

    <h2 className = {GlobalStyles.headerText}>
      Timing of Event
    </h2>
    <p className={GlobalStyles.descriptionText}>The Host agrees to begin the event not before the scheduled time and agrees to vacate the designated function space at the closing hour indicated.</p>
    <h2 className = {GlobalStyles.headerText}>
      Guaranteed Attendance
    </h2>
    <p className={GlobalStyles.descriptionText}>We ask you to confirm the total number of guests that will be attending at least Ten (10) days prior to the date of your event. The attendance figure you provide by this date will be the guaranteed minimum and cannot be reduced. If you do not provide a final attendance figure by this date, then the expected number of attendees the Host provided above will be used for preparation, staffing, calculation of the final per-person charges, and food quantities for the Host’s event.</p>
    <h2 className = {GlobalStyles.headerText}>Confirmation of Event</h2>
    <p className={GlobalStyles.descriptionText}>St. Michael Cinema must receive final menu selections, room arrangements and other details at least 10 days prior to the Host’s event. Menu pricing can be guaranteed up to ninety (90) days prior to the Host’s event. You acknowledge that there may be price increases to your chosen menu due to unforeseen circumstances at the time of the event. After the Host provides St. Michael Cinema with the final selections and arrangements, St. Michael Cinema will present the Host with an itemized invoice confirming the specific requirements of the Host’s event. Please notify St. Michael Cinema within 72 hours of any discrepancies between the final selections and arrangements the Host provided to St. Michael Cinema and the itemized invoice provided. St. Michael Cinema is not responsible for any discrepancies that are not immediately brought to St. Michael Cinema’s attention. Additionally, St. Michael Cinema is not liable for any damages related to food allergies of the Host or any of the guests in attendance.</p>
    <h2 className = {GlobalStyles.headerText}>Final Account of Charges</h2>
    <p className={GlobalStyles.descriptionText}>This Final Account of Charges may or may not apply to the Host’s specific event if the Host did not have any additional upgrades or event-day purchases. This charge will be e-mailed to the Host within 24 hours of the event for final payment that lists the final charges due and owing. The Host is responsible for full payment of the final charges upon reciept.</p>
    <h2 className={GlobalStyles.headerText}>Tax and Service Charge</h2>
    <p className={GlobalStyles.descriptionText}>All food, beverage and some other services provided by St. Michael Cinema are subject to a service charge of 18% which will be included in the estimate payment and final account of charges. The Host is responsible for the payment of all state sales tax incurred in connection with the event. Food, beverage, service charge and room fees may be taxable. If the Host is a tax exempt organization, please provide St. Michael Cinema with proof of Sales and Use Tax Exemption, which must be presented to St. Michael Cinema at the time of Contract Signing. If this Certificate is not returned along with the executed Contract, sales tax will be charged.</p>
    <h2 className = {GlobalStyles.headerText}>Cancellation/Reschedule and Non-Refundable Deposit Schedule</h2>
    <p className={GlobalStyles.descriptionText}>Host may cancel this Agreement only by written notice to Event Manager of the facility. The parties agree and understand that in the event of a cancellation, St. Michael Cinema’s actual damages would be difficult to determine. ONCE A DEPOSIT IS MADE, IT IS NON REFUNDABLE AND NON TRANSFERABLE IF THE EVENT IS CANCELLED OR RESCHEDULED.</p>
    <h2 className={GlobalStyles.headerText}>Decorations</h2>
    <p className={GlobalStyles.descriptionText}>All displays and/or decorations will be subject to St. Michael Cinema's prior, written approval. Items may not be attached to walls, doors, windows or ceiling with tape, nails or staples. Absolutely no confetti or glitter is allowed in the building. Host is responsible for the removal of all decorations at the conclusion of the function and shall be liable for any damage to the venue that occurs in removing decorations. St. Michael Cinema is not responsible for any loss or damage to your property and does not maintain insurance covering it. Host and its suppliers may enter the facility no sooner than the guaranteed access time.. St. Michael Cinema will not assume the responsibility for any decorations before, during or after the event. St. Michael Cinema offers additional rental items that may be added to the function, which are not included in the cost of the room. These items include (but not limited to): specialty linens, premium glass plates and drinkware, podium, projector with screen, speakers, and microphone. Host may be liable for a clean-up fee of $250.00 per space utilized for the event for excessive clean-up related to the use of flames, confetti, glitter, decorations, etc.</p>
    <h2 className={GlobalStyles.headerText}>Conduct and Use</h2>
    <p className={GlobalStyles.descriptionText}>The Host is responsible for ensuring that no prohibited items as set out in this agreement or under applicable law, are brought onto the premises (ex. alcohol from off-site). The Host is furthermore responsible for ensuring that the attendees of the function do not disturb the enjoyment of adjacent areas by other guests of St. Michael Cinema, whether by noise, conduct or otherwise. Additionally, the Host is responsible for the repair and/or replacement of any aspect of the premises which becomes damaged in any way as a result of the Host, the Host’s employees, contractors, agents, guests, customers, licensees, invitees, attendees or other third parties. The Host agrees to leave any entertainment, meeting, and function space used in a clean and neat manner upon conclusion of the event. St. Michael Cinema’s property is used by customers and other guests, and for formal events. In St. Michael Cinema’s sole discretion; we reserve the right to remove anyone from the premises who engages in disruptive, violent, profane, intoxicated or abusive behavior. As Host of this event, you agree to assume full responsibility for the conduct of your guests and for any damages, costs or liabilities that result from your guests’ conduct. St. Michael Cinema will not assume the responsibility for decorations, personal property, or equipment brought on the premises. Damage to, theft, or loss of any merchandise/equipment or articles left at the facility or unattended by the Host’s guests are not the responsibility of St. Michael Cinema. St. Michael Cinema is a smoke-free building.  Smoking, including the use of E-Cigs and other vaping devices are strictly prohibited.</p>
    <h2 className={GlobalStyles.headerText}>Security</h2>
    <p className={GlobalStyles.descriptionText}>If, by St. Michael Cinema’s sole judgment, it is determined that Host needs uniformed security personnel to maintain adequate security measures in light of the size and/or nature of your function, St. Michael Cinema will provide security personnel from a licensed guard or security agency doing business in the local area at Host’s expense.</p>
    <h2 className={GlobalStyles.headerText}>Non-Performance</h2>
    <p className={GlobalStyles.descriptionText}>St. Michael Cinema shall not be liable for non-performance of this Agreement when such nonperformance is attributable to labor troubles, or strikes, accidents, pandemics or epidemics, government (State, Federal and Municipal) regulations, non-availability of food, beverage, supplies, riots, national emergencies, acts of God including hurricanes and floods, and other causes whether enumerated herein or not, which are beyond the reasonable control of the St. Michael Cinema, preventing or interfering with the St. Michael Cinema’s performance.</p>
    <h2 className={GlobalStyles.headerText}>Acceptance</h2>
    <p className={GlobalStyles.descriptionText}>Should another St. Michael Cinema customer request the same set of dates and desire to confirm prior to your option date, Host will be notified and given twenty-four (24) hours to sign this Agreement. If the signed Agreement is not returned within twenty-four (24) hours, space will be released to the other group.
      <br/>
      This Agreement constitutes a binding contract between the parties. If this Agreement is not signed one week following its receipt, all function rooms and meeting space referred to herein will be released, and neither party will have any further obligations under this Agreement. There are no other representations, implied or oral, between St. Michael Cinema and Host with respect to this Agreement.</p>
    <hr/>
    <label className={GlobalStyles.descriptionText}>By signing below you acknowledge and accept the terms and regulations of the St. Michael Cinema</label>
    <SignatureCanvas 
      canvasProps= {{className: styles.signature }}
      ref={sigRef}
      onEnd={handleSignatureEnd}
    />
    <button className={styles.clearButton} onClick={clearSignature}>Clear</button>
    
      <button className={GlobalStyles.button}type="button" onClick={() => navigate('/Payment')}>Continue</button>
      </div>
  </div>
  );
}

export default Contract;

