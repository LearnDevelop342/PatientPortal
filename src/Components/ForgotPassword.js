
import '../Style/ForgotPassword.css';
import { Link } from "react-router-dom";
import logo from '../logo.PNG';
import ReusableInput from '../ReusableComponents/ReusableInput';
import { useState } from 'react';
import ResuableButton from '../ReusableComponents/ReusableButton';


function ForgotPassword() {
    let [email,setEmail]=useState('');
let handleEmailChange = (evt) => {
  setEmail(evt.target.value);
};
let handleSendLink=(evt)=>{
  evt.preventDefault();
  console.log("Reset link sent to:", email);
  setEmail('');
};

  return (
<div className='forgot-password-container'>
   <div className='forgot-password-box'>
    <div className='forgot-password-header'>
    <div className='forgot-logo'>
         <img
                src={logo}  // put your logo image path here
                alt="Logo"
                
                width="20%"
              />
               <h3>Forgot  your Passoword?</h3>
      
              </div>
                       <p>Enter your registered email to receive<br/>
        a reset link.
    </p>
   
    
    </div>
    
    <form onSubmit={handleSendLink} className='forgot-form'>
       <ReusableInput 
      label="Email"
  type="email"
  name="email"
  value={email}
  onChange={handleEmailChange}
  classNameLabel="labels"
  classNameInput="input-field"
      />
      <ResuableButton buttonname="Send Reset Link" className="button" />

    </form>
    <p className='forgot-para'>Remembered it? {' '}<Link to="/" className='Login-link'>Log in</Link></p>
    </div>
    </div>
    
  );
}

export default ForgotPassword;