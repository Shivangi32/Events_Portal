import React, { useState } from 'react';
import "./Navbar.css"
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig"
import Register from "./Register/RegisterPage.js";
import Login from "./Login/LoginPage.js";

export default function Navbar({ user, email, showNav }) {


    const [isLoggedin, setIsLoggedin] = useState((user === "undefined") ? false : true);
    const [SocLogin, setSocLogin] = useState((email != null && email.includes("cbigdtuw.in")) ? true : false);

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
        localStorage.removeItem("email");
        localStorage.removeItem("profilePic");
        setIsLoggedin(false);
        setisSocLogin(false);

    };

    const [openLoginModal, setOpenLoginModal] = useState(false);
    const setLoginVal = (value) => {
        setOpenLoginModal(value);
    }

    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const setRegisterVal = (value) => {
        setOpenRegisterModal(value);
    }
    if (!showNav) {
        return (
            <div id="navside" class="admin">


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
                        <button onClick={logOut}>
                            <Link to="/">Log Out</Link></button>
                        {
                            (localStorage.getItem("profilePic") == "null") ?
                                <span >   <AiOutlineUser /></span>
                                :
                                <img id="profilePic" src={localStorage.getItem("profilePic")}></img>

                        }


                    </>
                )}

            </div>);
    }
    return (

        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid navbar-brand">

                    {/* <button className="navbar-toggler navbar-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse navbar-brand" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <p className="item"><Link to="/">Home</Link></p>
                            </li>
                            <li className="nav-item">
                                <Link to="/About">About</Link>
                            </li>
                            {(SocLogin) ? (
                                    <li className="nav-item">
                                        <Link to="/Society">Societies</Link>
                                    </li>
                                ) : (<div></div>)
                            }
                            <li className="nav-item">
                                <Link to="/FAQs">FAQs </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            
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
                                    <button onClick={logOut}>
                                        <Link to="/">Log Out</Link></button>
                                    {
                                        (localStorage.getItem("profilePic") == "null") ?
                                            <span >   <AiOutlineUser /></span>
                                            :
                                            <img id="profilePic" src={localStorage.getItem("profilePic")}></img>

                                    }
                                </>
                            )}
                    </div>
            {openLoginModal && <Login setModalFunc={setLoginVal} setIsLoggedinVal={setIsLoggedinVal} setisSocLogin={setisSocLogin} />}
            {openRegisterModal && <Register setModalFunc={setRegisterVal} setIsLoggedinVal={setIsLoggedinVal} />}
        </div>
    )
}

