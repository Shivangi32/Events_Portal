import React, { useState } from 'react';
import "./Navbar.css"
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "./Register/firebaseConfig"
import Register from "./Register/RegisterPage.js";
import Login from "./Login/LoginPage.js";

export default function Navbar({ user, email }) {


    console.log(email);
    const [isLoggedin, setIsLoggedin] = useState((user === "undefined") ? false : true);
    const [AdminLogin, setAdminLogin] = useState((email==null || !email.includes("admin.com")) ? false : true);

    console.log(isLoggedin);
    const setIsLoggedinVal = (value) => {

        console.log("inside is logged in" + value);
        setIsLoggedin(value);
    }

    const setisAdminLogin=(value)=>{
        setAdminLogin(value);
    }

    const logOut = () => {

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
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">About</a>
                            </li>
                            {AdminLogin ? (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/Society">Societies</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/Admin">Admin</a>
                                    </li></>) : (<div></div>)
                            }
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">FAQS</a>
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
            {openLoginModal && <Login setModalFunc={setLoginVal} setIsLoggedinVal={setIsLoggedinVal} setisAdminLogin={setisAdminLogin}/>}
            {openRegisterModal && <Register setModalFunc={setRegisterVal} setIsLoggedinVal={setIsLoggedinVal} />}
        </div>
    )
}
