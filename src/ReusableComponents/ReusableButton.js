import React from 'react';
import logo from '../logo.PNG';
import '../Style/LoginPage.css';


function ResuableButton({buttonname,className}) {
  return (
   
    <div className={className}>
        <button className={className}>{buttonname}</button>
    </div>
    
    
  );
}

export default ResuableButton;