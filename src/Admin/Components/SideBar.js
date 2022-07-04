import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import {Link} from "react-router-dom";
import './SideBar.css';
import {IconContext} from 'react-icons';
function SideBar(){
    const [sidebar, setSidebar]= useState(false);

    const showSidebar =() => setSidebar(!sidebar);
    return(
<>
<IconContext.Provider value={{color:'#fff'}}>
    <div className='sidebar'>
        {/* <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link> */}
    </div>
    {/* <nav className={sidebar ? 'nav-menu active': 'nav-menu'}> */}
    <nav className='nav-menu active'>
        {/* <ul className='nav-menu-items' onClick={showSidebar}> */}
        <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
            {/* <Link to ="#"className='menu-bars'>
                <AiIcons.AiOutlineClose/>
            </Link> */}
            </li>
            {SidebarData.map((item,index)=>{
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    </IconContext.Provider>
</>
    );
}

export default SideBar;
