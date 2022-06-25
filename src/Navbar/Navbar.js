import React, { useState } from 'react';
import "./Navbar.css"
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import Register from "./Register/RegisterPage";
import Login from "./Login/LoginPage"
export default function Navbar() {


    const [openLoginModal, setOpenLoginModal] = useState(false);
    const setLoginVal = (value) => {
        setOpenLoginModal(value);
    }

    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const setRegisterVal = (value) => {
        setOpenRegisterModal(value);
    }

    const user = localStorage.getItem("name");
    
    const setUpUI = (user) => {

        console.log(user);
        const loggedIN=document.querySelectorAll(".logged-in");
        const loggedOUT=document.querySelectorAll(".logged-out");
        if (user) {
            loggedIN.forEach(item=> item.style.display="block")
            loggedOUT.forEach(item=> item.style.display="none")
            console.log(user);
        }
        else {
            loggedIN.forEach(item=> item.style.display="none")
            loggedOUT.forEach(item=> item.style.display="block")
        }
        
    }
    window.addEventListener('load',setUpUI);
    

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
                            <span className="logged-out"><BsFillPersonPlusFill /></span>
                            <button className="logged-out" onClick={() => { setOpenLoginModal(true) }}>Login</button>
                            <span className="logged-out"><FaPlus /></span>
                            <button className="logged-out" onClick={() => { setOpenRegisterModal(true) }}>Register</button>
                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                            <img className="logged-in" id="profilePic" src={localStorage.getItem("profilePic")}></img>
                            <button className="logged-in">Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>
            {openLoginModal && <Login setModalFunc={setLoginVal} />}
            {openRegisterModal && <Register setModalFunc={setRegisterVal} />}
        </div>
    )
}