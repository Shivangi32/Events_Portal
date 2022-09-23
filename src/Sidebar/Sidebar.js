import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "./Sidebar.css"
export default function Sidebar(){

    const email = localStorage.getItem("email");
    const [SocLogin, setSocLogin] = useState((email != null && email.includes("cbigdtuw.in")) ? true : false);
    return (
        <nav className="usernav">
        <ul class="usernav-items">
            <li class="usernav-item a"><Link to="/">HOME</Link></li>
            <li class="usernav-item b"><Link to="/About">ABOUT</Link></li>
            
            <li class="usernav-item c"><Link to="/Society">SOCIETY</Link></li>
            <li class="usernav-item d"><Link to="/FAQs">FAQs</Link></li>
        </ul>
    </nav>
    );
}