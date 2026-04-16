import React from 'react';
import '../Style/LoginPage.css';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import Footer from './Footer';
import SignupForm from './SignupForm';

function LoginPage() {
  return (
    <div className='main-container'>
    <div className='auth-form'>
      <LoginHeader subheading="Sign up for an account"/>
      
      <SignupForm/>
      
      <Footer paratext="Already have an account?" linkname="Log in" linkpath="/"/>
      
    </div>
    </div>
    
    
  );
}

export default LoginPage;