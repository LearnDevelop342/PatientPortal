import React from 'react';
import logo from '../logo.PNG';
import '../Style/LoginPage.css';
import { useState } from 'react';
import Footer from './Footer';
import ReusableInput from '../ReusableComponents/ReusableInput';
import ResuableButton from '../ReusableComponents/ReusableButton';



function SignupForm() {
  let [signupFormData,setSignupFormData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:""
  });
let handleInputChangeSignup=(evt)=>{

  setSignupFormData((currdata)=>{
    return{...currdata,[evt.target.name]: evt.target.value};
  })
};

let handleSubmitSignup=(evt)=>{
  evt.preventDefault();
 setSignupFormData ({
    firstname:"",
    lastname:"",
    email:"",
    password:""
  })
};

  return (
    <form onSubmit={handleSubmitSignup} className="signup-form-container">
    
        <div className="login-form">
            <div className="input-scroll-area">
              
    
     
    
      <ReusableInput 
      label="First name"
  type="text"
  name="firstname"
  value={signupFormData.firstname}
  onChange={handleInputChangeSignup}
  classNameLabel="labels"
  classNameInput="input-field"
      />
      <ReusableInput 
      label="Last name"
  type="text"
  name="lastname"
  value={signupFormData.lastname}
  onChange={handleInputChangeSignup}
  classNameLabel="labels"
  classNameInput="input-field"
      />
       <ReusableInput 
      label="Email"
  type="email"
  name="email"
  value={signupFormData.email}
  onChange={handleInputChangeSignup}
  classNameLabel="labels"
  classNameInput="input-field"
      />
        <ReusableInput 
      label="Username"
  type="text"
  name="username"
  value={signupFormData.firstname}
  onChange={handleInputChangeSignup}
  classNameLabel="labels"
  classNameInput="input-field"
      />
      
       <ReusableInput 
      label="Password"
  type="password"
  name="password"
  value={signupFormData.password}
  onChange={handleInputChangeSignup}
  classNameLabel="labels"
  classNameInput="input-field"
      />
  
   </div>
  
  <ResuableButton buttonname="Sign Up" className="button" />
  
  
    </div>
    
    
    
    </form>
    
    
  );
}

export default SignupForm;