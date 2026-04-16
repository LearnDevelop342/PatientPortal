import '../Style/Sidebar.css';
import { NavLink } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { FaRegMessage } from "react-icons/fa6";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { useState } from 'react';

const Sidebar=({collapsed})=>{
    return(
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className='sidebar-links'>
        <NavLink> <RxDashboard className='nav-icon' />
                 <span className='link-text'>Dashboard</span></NavLink>
        <NavLink><FaRegMessage className='nav-icon'/><span className='link-text'>Messages</span></NavLink>
        <NavLink> <AiOutlineSchedule className='nav-icon' /><span className='link-text'>Appointments</span></NavLink>
        <NavLink><MdOutlineMedicalServices className='nav-icon' /><span className='link-text'>Medical Records</span></NavLink>
        <NavLink><FaFileInvoiceDollar className='nav-icon' /><span className='link-text'>Billing</span></NavLink>
        <NavLink><IoSettingsOutline className='nav-icon' /><span className='link-text'>Settings</span></NavLink>
        <NavLink> <IoMdLogOut className='nav-icon' /> <span className='link-text'>Log Out</span></NavLink>
        </div>
        
        </div>

    )
};
export default Sidebar;