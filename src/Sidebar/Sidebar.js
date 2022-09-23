import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "./Sidebar.css"
export default function Sidebar(){

    const email = localStorage.getItem("email");
    const [SocLogin, setSocLogin] = useState((email != null && email.includes("cbigdtuw.in")) ? true : false);
    return (
        <nav className="usernav">
        <ul className="usernav-items">
            <Link to="/"><li class="usernav-item a">HOME</li></Link>
            <Link to="/About"><li class="usernav-item b">ABOUT</li></Link>

            {SocLogin? (<Link to="/Society"><li class="usernav-item c">SOCIETY</li></Link>):(<div></div>)}
            
            
            <Link to="/FAQs"><li class="usernav-item d">FAQs</li></Link>
        </ul>
    </nav>
    );
}