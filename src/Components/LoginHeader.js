import React from 'react';
import logo from '../logo.PNG';
import '../Style/LoginPage.css';


function LoginHeader({subheading}) {
  return (
    <div className='login-header-wrapper'>
    <div className='login-header'>
        <img
        src={logo}  // put your logo image path here
        alt="Logo"
        className="header-logo"
        width="10%"
      />
      <h2>Patient Portal</h2>
      </div>
      <h1  className='subheading'>{subheading}</h1>
    </div>
    
    
  );
}

export default LoginHeader;