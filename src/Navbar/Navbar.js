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


export default function Navbar({ user, email, showNav }) {

    const [isLoggedin, setIsLoggedin] = useState((email != null && email!="null") ? true : false);
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
        localStorage.setItem("email",null);
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
            {/*<nav className="navbar navbar-expand-lg">
                <div className="container-fluid navbar-brand">

                    <button className="navbar-toggler navbar-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> 
                    <div className="collapse navbar-collapse navbar-brand" id="navbarSupportedContent">*/}
            <ul className="navbar-nav me-auto">
                <img className="logo" src={logo} />
                <div id="navside">
                    {!isLoggedin ? (
                        <>

                            <button className="login" onClick={() => { setOpenLoginModal(true) }}>LOG IN</button>

                            <button className="register" onClick={() => { setOpenRegisterModal(true) }}>REGISTER</button>
                            <i className="fa fa-sign-in" aria-hidden="true"></i>

                        </>
                    ) : (
                        <div className='nav-logout'>
                            <button className="login" onClick={logOut}>
                                <Link to="/" style={{background: "transparent"}}>LOG OUT</Link>
                            </button>

                            {/* <h6>{socName.toUpperCase()}</h6> */}
                            {
                                (localStorage.getItem("profilePic") == "null") ?
                                    <span>   <AiOutlineUser /></span>
                                    :
                                    <img id="profilePic" src={localStorage.getItem("profilePic")}></img>

                            }
                        </div>
                    )}
                </div>

            </ul>
            {/*</div>
                    
                </div>
                                </nav>*/}



            {openLoginModal && <Login setLoginModalFunc={setLoginVal} setRegisterModalFunc={setRegisterVal} setIsLoggedinVal={setIsLoggedinVal} setisSocLogin={setisSocLogin} />}
            {openRegisterModal && <Register setLoginModalFunc={setLoginVal} setRegisterModalFunc={setRegisterVal} setIsLoggedinVal={setIsLoggedinVal} />}
        </div>
    )
}

