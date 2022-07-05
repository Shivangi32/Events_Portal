import React, { useState } from 'react';
import "./Navbar.css"
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "./Register/firebaseConfig"
import Register from "./Register/RegisterPage.js";
import Login from "./Login/LoginPage.js";

export default function Navbar({ user, email }) {


    const [isLoggedin, setIsLoggedin] = useState((user === "undefined") ? false : true);
    const [AdminLogin, setAdminLogin] = useState((email != null && email.includes("cbigdtuw.in")) ? true : false);

    const setIsLoggedinVal = (value) => {

        setIsLoggedin(value);
    }

    const setisAdminLogin = (value) => {
        setAdminLogin(value);
    }

    const logOut = () => {

        signOut(auth);
        localStorage.setItem("name", undefined);
        localStorage.removeItem("email");
        localStorage.removeItem("profilePic");
        setIsLoggedin(false);
        setisAdminLogin(false);
    };

    const [openLoginModal, setOpenLoginModal] = useState(false);
    const setLoginVal = (value) => {
        setOpenLoginModal(value);
    }

    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const setRegisterVal = (value) => {
        setOpenRegisterModal(value);
    }

    return (

        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <button className="navbar-toggler navbar-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About">About</Link>
                            </li>
                            {AdminLogin ? (
                                <>
                                    <li className="nav-item">
                                        <Link to="/Society">Societies</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Admin">Admin</Link>
                                    </li></>) : (<div></div>)
                            }
                            <li className="nav-item">
                                <Link to="/FAQs">FAQs </Link>
                            </li>

                        </ul>
                        <div id="navside">


                            {!isLoggedin ? (
                                <>
                                    <span ><BsFillPersonPlusFill /></span>
                                    <button onClick={() => { setOpenLoginModal(true) }}>Login</button>
                                    <span ><FaPlus /></span>
                                    <button onClick={() => { setOpenRegisterModal(true) }}>Register</button>
                                    <i className="fa fa-sign-in" aria-hidden="true"></i>

                                </>
                            ) : (
                                <>
                                    <button onClick={logOut}>Log Out</button>
                                    <img id="profilePic" src={localStorage.getItem("profilePic")}></img>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </nav>
            {openLoginModal && <Login setModalFunc={setLoginVal} setIsLoggedinVal={setIsLoggedinVal} setisAdminLogin={setisAdminLogin} />}
            {openRegisterModal && <Register setModalFunc={setRegisterVal} setIsLoggedinVal={setIsLoggedinVal} />}
        </div>
    )
}
