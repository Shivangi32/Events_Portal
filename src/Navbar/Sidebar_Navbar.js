import React, { useState, useEffect } from 'react';
import "./Navbar.css"
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig"
import Register from "./Register/RegisterPage.js";
import Login from "./Login/LoginPage.js";
import logo from './logo.png'
import line from "../Sidebar/line.png";


export default function Navbar({ user, email, showNav }) {

    const [isLoggedin, setIsLoggedin] = useState((email != null && email != "null") ? true : false);
    const [SocLogin, setSocLogin] = useState(localStorage.getItem("SocLogin"));

    
    const setIsLoggedinVal = (value) => {

        setIsLoggedin(value);
    }

    const setisSocLogin = (value) => {
        setSocLogin(value);
    }


    const logOut = () => {

        signOut(auth);
        window.location.reload();
        localStorage.setItem("name", undefined);
        localStorage.setItem("email", null);
        localStorage.setItem("AdminLogin", "false");
        localStorage.setItem("SocLogin", "false");
        localStorage.removeItem("profilePic");
        setIsLoggedin(false);
        setisSocLogin(false);

    };

    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openRegisterModal, setOpenRegisterModal] = useState(false);

    const setLoginVal = (value) => {
        setOpenLoginModal(value);
    }

    const setRegisterVal = (value) => {
        setOpenRegisterModal(value);
    }

    window.addEventListener('popstate', function (event) {
        setOpenLoginModal(false);
        setOpenRegisterModal(false);

    });

    return (

        <div>
            <ul className="navbar-nav me-auto sidebar_navside">

                {!isLoggedin ? (
                    <>

                        <button className="usernav-item" onClick={() => { setOpenLoginModal(true) }}>LOG IN</button>
                        <img className="line" src={line} />
                        <button className="usernav-item" onClick={() => { setOpenRegisterModal(true) }}>REGISTER</button>
                        <i className="fa fa-sign-in" aria-hidden="true"></i>
                        <img className="line" src={line} />

                    </>
                ) : (
                    <div className='nav-logout'>
                        <button className="usernav-item" onClick={logOut}>
                            <Link to="/" style={{ background: "transparent" }}>LOG OUT</Link>
                        </button>
                        <img className="line" src={line} />
                    </div>
                )}
            </ul>

            {openLoginModal && <Login setLoginModalFunc={setLoginVal} setRegisterModalFunc={setRegisterVal} setIsLoggedinVal={setIsLoggedinVal} setisSocLogin={setisSocLogin} />}
            {openRegisterModal && <Register setLoginModalFunc={setLoginVal} setRegisterModalFunc={setRegisterVal} setIsLoggedinVal={setIsLoggedinVal} />}
        </div>
    )
}

