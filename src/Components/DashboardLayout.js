import Navbar from "./Navbar"
import Sidebar from "./Sidebar";
import { useState } from "react";


const DashboardLayout=()=>{
    const [collapsed, setCollapsed] = useState(false); // shared state
    return(
        <>
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Sidebar collapsed={collapsed}/>
        </>
    )
};
export default DashboardLayout;