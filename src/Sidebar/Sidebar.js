import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import "./Sidebar.css"
export default function Sidebar() {

    
  const SocLogin=localStorage.getItem("SocLogin");
  const AdminLogin=localStorage.getItem("AdminLogin");
    return (
        <nav className="navbar-expand-md sidebarNav">

                <button className="navbar-toggler navbar-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-brand" id="navbarSupportedContent">
                    <ul className="usernav-items">
                        <li className='usernav-item'>
                            <NavLink to="/" style={({ isActive }) => ({
                                background: isActive ? '#9747FF' : 'transparent',
                                padding: "6px 9px",
                                borderRadius: "5px"
                            })}>
                                HOME
                            </NavLink>
                        </li>

                        <li className='usernav-item'>
                            <NavLink to="/About" style={({ isActive }) => ({
                                background: isActive ? '#9747FF' : 'transparent',
                                padding: "6px 9px",
                                borderRadius: "5px"

                            })}>
                                ABOUT
                            </NavLink>
                        </li>


                        {localStorage.getItem("SocLogin")==="true" ? (
                            <li className='usernav-item'>
                                <NavLink to="/Society" style={({ isActive }) => ({
                                    background: isActive ? '#9747FF' : 'transparent',
                                    padding: "6px 9px",
                                    
                                    borderRadius: "5px"
                                })}>SOCIETY</NavLink>
                            </li>
                        ) : (<></>)}

                        {localStorage.getItem("AdminLogin")==="true" ? (
                            <li className='usernav-item'>
                                <NavLink to="/Admin" style={({ isActive }) => ({
                                    background: isActive ? '#9747FF' : 'transparent',
                                    padding: "6px 9px",
                                    borderRadius: "5px"
                                })}>ADMIN</NavLink>
                            </li>
                        ) : (<></>)}

                        <li className='usernav-item'>
                            <NavLink to="/FAQs" style={({ isActive }) => ({
                                background: isActive ? '#9747FF' : 'transparent',
                                padding: "6px 9px",
                                borderRadius: "5px"
                            })}>
                                FAQs
                            </NavLink>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}