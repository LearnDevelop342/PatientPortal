import React from 'react';
import logo from '../logo.PNG';
import '../Style/LoginPage.css';
import { useState } from 'react';
import ReusableInput from '../ReusableComponents/ReusableInput';
import ResuableButton from '../ReusableComponents/ReusableButton';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginForm() {
  let [formData,setFormData]=useState({
    username:"",
    password:""
  });
let handleInputChange=(evt)=>{

  setFormData((currdata)=>{
    return{...currdata,[evt.target.name]: evt.target.value};
  })
};

// let handleSubmit=(evt)=>{
//   evt.preventDefault();
//   setFormData({
//     username:"",
//     password:""
//   })
// };
let handleSubmit= async(evt)=>{
  evt.preventDefault();
  try{
    const res= await fetch("http://localhost:3001/users");
    const users= await res.json();
    // Find user with matching username and password
    const user=users.find(
      (u)=> u.username===formData.username&& u.password===formData.password
    );
    if(user){
      toast.success("Login successful!");

    }
    else{
      toast.error("Incorrect username or password");
    }

  }catch (error){
    toast.error("Server error. Please try again later.");
    console.error("Login error:", error);
  }
  setFormData({
    username: "",
    password: "",
  });
};


  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} />
 
    
    <form onSubmit={handleSubmit}>
    <div className='login-form'>
     
      <ReusableInput 
      label="Username"
  type="text"
  name="username"
  value={formData.username}
  onChange={handleInputChange}
  placeholder="Enter your username"
  classNameLabel="labels"
  classNameInput="input-field"
  required = 'true'
      />
       <ReusableInput 
      label="Password"
  type="password"
  name="password"
  value={formData.password}
  onChange={handleInputChange}
  placeholder="Enter your password"
  classNameLabel="labels"
  classNameInput="input-field"
  required = 'true'
      />
      
         
          
  
   
  <Link to={'/forgotpassword'} className="forgot-password" >Forgot Password?</Link>
  
  <ResuableButton buttonname="Log In" className="button" />
  
  
    </div>
    </form>
    </div>
    
    
  );
}

export default LoginForm;