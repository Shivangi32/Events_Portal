import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import "./Sidebar.css"
export default function RightNav() {

  const SocLogin=localStorage.getItem("SocLogin");
  const AdminLogin=localStorage.getItem("AdminLogin");

    return (
        <nav className="usernav">
            <ul className="usernav-items">
                <li className='usernav-item'>
                    <NavLink to="/" style={({ isActive }) => ({
                        background: isActive ? '#9747FF' : 'transparent',
                        padding: "6px 12px",
                        borderRadius: "5px"
                    })}>
                        HOME
                    </NavLink>
                </li>

                <li className='usernav-item'>
                    <NavLink to="/About" style={({ isActive }) => ({
                        background: isActive ? '#9747FF' : 'transparent',
                        padding: "6px 12px",
                        borderRadius: "5px"
                    })}>
                        ABOUT
                    </NavLink>
                </li>


                {SocLogin ? (
                    <li className='usernav-item'>
                        <NavLink to="/Society" style={({ isActive }) => ({
                            background: isActive ? '#9747FF' : 'transparent',
                            padding: "6px 12px",
                            borderRadius: "5px"
                        })}>SOCIETY</NavLink>
                    </li>
                ) : (<></>)}

                {AdminLogin ? (
                    <li className='usernav-item'>
                        <NavLink to="/Admin" style={({ isActive }) => ({
                            background: isActive ? '#9747FF' : 'transparent',
                            padding: "6px 12px",
                            borderRadius: "5px"
                        })}>ADMIN</NavLink>
                    </li>
                ) : (<></>)}

                <li className='usernav-item'>
                    <NavLink to="/FAQs" style={({ isActive }) => ({
                        background: isActive ? '#9747FF' : 'transparent',
                        padding: "6px 12px",
                        borderRadius: "5px"
                    })}>
                        FAQs
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}