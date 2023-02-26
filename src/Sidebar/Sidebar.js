import React, { useState } from 'react';
import logo from "../Navbar/logo.png"
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import line from "./line.png";
import "./Sidebar.css"
import Sidebar_Navbar from "../Navbar/Sidebar_Navbar"
export default function Sidebar() {


    const SocLogin = localStorage.getItem("SocLogin");
    const AdminLogin = localStorage.getItem("AdminLogin");
    const user = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    return (
        <>
        
                <nav className="navbar-expand-md sidebarNav">

            <div style={{ background: "rgb(43, 42, 42)" }}>
                <button className="navbar-toggler navbar-light bg-light"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button></div>
                
            <div className="collapse navbar-collapse navbar-brand sidebar-navbar-brand" id="navbarSupportedContent">
            <img className="sidebar_logo" src={logo}/>
                <ul className="usernav-items" >

                    <img className="line" src={line} />
                    <li className='usernav-item'>
                        <NavLink to="/" style={({ isActive }) => ({
                            background: isActive ? '#9747FF' : 'transparent',
                            padding: "6px 9px",
                            borderRadius: "5px"
                        })}>
                            HOME
                        </NavLink>
                    </li>

                    <img className="line" src={line} />
                    <li className='usernav-item'>
                        <NavLink to="/About" style={({ isActive }) => ({
                            background: isActive ? '#9747FF' : 'transparent',
                            padding: "6px 9px",
                            borderRadius: "5px"

                        })}>
                            ABOUT
                        </NavLink>
                    </li>


                    {localStorage.getItem("SocLogin") === "true" ? (
                        <>
                            <img className="line" src={line} />
                            <li className='usernav-item'>
                                <NavLink to="/Society" style={({ isActive }) => ({
                                    background: isActive ? '#9747FF' : 'transparent',
                                    padding: "6px 9px",

                                    borderRadius: "5px"
                                })}>SOCIETY</NavLink>
                            </li>
                        </>
                    ) : (<></>)}

                    {localStorage.getItem("AdminLogin") === "true" ? (
                        <>
                            <img className="line" src={line} />
                            <li className='usernav-item'>
                                <NavLink to="/Admin" style={({ isActive }) => ({
                                    background: isActive ? '#9747FF' : 'transparent',
                                    padding: "6px 9px",
                                    borderRadius: "5px"
                                })}>ADMIN</NavLink>
                            </li>
                        </>
                    ) : (<></>)}

                    <img className="line" src={line} />
                    <li className='usernav-item'>
                        <NavLink to="/FAQs" style={({ isActive }) => ({
                            background: isActive ? '#9747FF' : 'transparent',
                            padding: "6px 9px",
                            borderRadius: "5px"
                        })}>
                            FAQs
                        </NavLink>
                    </li>
                    <img className="line" src={line} />
                    <Sidebar_Navbar user={user} email={email}/>
                </ul>
            </div>
        </nav>
        </>
    );
    
}