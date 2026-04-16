import React from "react";
import '../Style/Test.css';

export default function SignupBox() {
  return (
    <div className="signup-box">
      <header className="signup-header">
        <h2>Sign Up</h2>
      </header>

      <form className="signup-form">
        <div className="scrollable-fields">
          <label>
            First Name
            <input type="text" name="firstname" />
          </label>
          <label>
            Last Name
            <input type="text" name="lastname" />
          </label>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>

          {/* Add more inputs to force scroll */}
          <label>
            Address
            <input type="text" name="address" />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" />
          </label>
          <label>
            City
            <input type="text" name="city" />
          </label>
          <label>
            Country
            <input type="text" name="country" />
          </label>
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>

      <footer className="signup-footer">
        <small>© 2025 Your Company</small>
      </footer>
    </div>
  );
}
