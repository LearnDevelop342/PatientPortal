
import '../Style/Navbar.css';
import { FaAlignJustify } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import profilePhoto from '../Patient.PNG';
import { useState } from 'react';

const Navbar=({collapsed, setCollapsed})=>{
    
    return(
        <div className='navbar'>
            <div className='navbar-left'>
         <FaAlignJustify style={{ cursor: 'pointer' }} size={35} className='faicon' onClick={() => setCollapsed(!collapsed)}/>
         <GoPlusCircle size={35} className='logo' />
        <h4 className='title-patient'>Patient Portal</h4>
         </div>
<div className='navbar-center'>
    <h2>Dashboard</h2>

</div>
<div className='navbar-right'>
<img src={profilePhoto} alt='profile' />
</div>
        </div>
    )

};
export default Navbar;