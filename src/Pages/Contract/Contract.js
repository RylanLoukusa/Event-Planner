import React, { Component, useRef, useState, useEffect } from 'react';
import {render} from 'react-dom';
import SignatureCanvas from 'react-signature-canvas';
import { useNavigate } from "react-router-dom";
import GlobalStyles from '../Global.module.css'
import'./Contract.css';



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
  return <div>
        <button className={GlobalStyles.button}type="button" onClick={() => navigate('/Summary')}>Back</button>

    <h2 className = {GlobalStyles.headerText}>
      Section one
    </h2>
    <h2 className = {GlobalStyles.headerText}>
      Section two
    </h2>
    <hr/>
    <label className={GlobalStyles.descriptionText}>By signing below you acknowledge and accept the terms and regulations of the St. Michael Cinema</label>
    <SignatureCanvas 
      canvasProps= {{className:"signature"}}
      ref={sigRef}
      onEnd={handleSignatureEnd}
    />
    <button className={GlobalStyles.specialButton} onClick={clearSignature}>Clear</button>
    
      <button className={GlobalStyles.button}type="button" onClick={() => navigate('/Payment')}>Continue</button>
  </div>
}

export default Contract;