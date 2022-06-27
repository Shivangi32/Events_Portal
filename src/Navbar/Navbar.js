import React, { useState } from 'react';
import "./Navbar.css"
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import Register from "./Register/RegisterPage";
import Login from "./Login/LoginPage";
var loggedIN;
var loggedOUT;

export default function Navbar({ user }) {


    const [isLoggedin, setIsLoggedin] = useState(false);

    const setIsLoggedinVal = (value) => {
        console.log("inside is logged in" + value);
        setIsLoggedin(value);
    }

    const logOut = () => {

        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("profilePic");
        setIsLoggedin(false);
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
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/src/Society/SocietyPage">Societies</a>
                            </li>
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
            {openLoginModal && <Login setModalFunc={setLoginVal} setIsLoggedinVal={setIsLoggedinVal} />}
            {openRegisterModal && <Register setModalFunc={setRegisterVal} setIsLoggedinVal={setIsLoggedinVal} />}
        </div>
    )
}

export function setUpUI(user) {

    console.log(user);

    if (user) {
        console.log(loggedIN);
        loggedIN.forEach(item => item.style.display = "block")
        loggedOUT.forEach(item => item.style.display = "none")
    }
    else {
        loggedIN.forEach(item => item.style.display = "none")
        loggedOUT.forEach(item => item.style.display = "block")
    }

}