import React, { Component, useRef, useState, useEffect } from 'react';
import {render} from 'react-dom';
import SignatureCanvas from 'react-signature-canvas';
import { useNavigate } from "react-router-dom";
// import '../Styles/Contract.css';




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
    <label>By signing below you acknowledge and accept the terms and regulations of the St. Michael Cinema</label>
    <SignatureCanvas 
      penColor="black"
      canvasProps={{className: 'signaturePrompt'}}
      ref={sigRef}
      onEnd={handleSignatureEnd}
    />
    <button onClick={clearSignature}>Clear</button>
    <button type="button" onClick={() => navigate('/Summary')}>Back</button>
      <button type="button" onClick={() => navigate('/Payment')}>Continue</button>
  </div>
}

export default Contract;