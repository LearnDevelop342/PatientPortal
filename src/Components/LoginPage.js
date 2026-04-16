import React from 'react';
import '../Style/LoginPage.css';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import Footer from './Footer';
import { Link } from "react-router-dom";


function LoginPage() {
  return (
    <div className='main-container'>
    <div className='auth-form'>
      <LoginHeader subheading="Log in to your account"/>
      <LoginForm/>
      <Footer paratext="Do not have an account?" linkname="Sign up" linkpath="/signup" />
    </div>
    </div>
    
    
  );
}

export default LoginPage;