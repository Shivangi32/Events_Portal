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

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler navbar-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                            <span><BsFillPersonPlusFill /></span>
                            <button onClick={() => { setOpenLoginModal(true) }}>Login</button>
                            <span><FaPlus /></span>
                            <button onClick={() => { setOpenRegisterModal(true) }}>Register</button>
                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </nav>
            {openLoginModal && <Login setModalFunc={setLoginVal} />}
            {openRegisterModal && <Register setModalFunc={setRegisterVal} />}
        </div>
    )
}