import React from "react";
import { useNavigate } from "react-router-dom";
import '../Style/PrivacyAndTerms.css';




function PrivacyPolicy() {
  const navigate=useNavigate();
  return (
   <div className="policy-container">
    <div className="policy-box">
      <div className="policy-icon">🛡️</div>
      <h2 className="policy-title">Privacy Policy</h2>
      <section>
        <h3>1. Information We Collect</h3>
        <p> We collect your name,contact details,login credentials,
          and usage data to imporve your experience.
        </p>
      </section>
      <section>
        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>To manage access to your records.</li>
          <li>To notify you of appointments and system updates.</li>
        </ul>
      </section>
      <section>
        <h3>3. Data Security</h3>
        <p>We use encryption and access controls to protrct your data</p>
      </section>
      <section>
        <h3>4. Your Rights</h3>
        <p>You can request corrections or deletion of your data, 
          and manage notification preferences.</p>
      </section>
      <button className="close-btn" onClick={()=>navigate('/')}>Close</button>

    </div>

   </div>
    
    
    
  );
}

export default PrivacyPolicy;