
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsOfServices from './Components/TermsOfServices';
import ForgotPassword from './Components/ForgotPassword';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import DashboardLayout from './Components/DashboardLayout';



function App() {
  return (
<>
<Router>
<DashboardLayout/>
</Router>
</>


  );
}

export default App;




//    <Router>
// <Routes>
//       <Route path="/" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/forgotpassword" element={<ForgotPassword />} />
//         <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
//         <Route path='/termsofservices' element={<TermsOfServices/>}/>
// </Routes>
//    </Router>
