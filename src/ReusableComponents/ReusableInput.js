
import '../Style/LoginPage.css';
import React from 'react';



const ReusableInput= ({
  label,
  type="text",
  name,
  value,
  onChange,
  placeholder,
  classNameLabel,
  classNameInput,
  required=false
  
})=> {
  return (
   <div className="Reusable-input">
    {label && <label htmlFor={name} className={classNameLabel}>{label}</label>}
    
     <input
    type={type}
    id={name}
    name={name}
    placeholder={placeholder}
    className={classNameInput}
    value={value}
    onChange={onChange} 
    required={required}
  />
 
  </div>

    
    
  );
}

export default ReusableInput;