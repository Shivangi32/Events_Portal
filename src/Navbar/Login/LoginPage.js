import React, { useState } from 'react';
import "./login.css";
import { signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail } from "firebase/auth";
import { app, auth, provider } from "../../firebaseConfig";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import earth from "../../Mask\ group.png"
import logo from "../logo.png";
import { FcGoogle } from "react-icons/fc";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
} from "firebase/firestore";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { border } from '@mui/system';

export default function Login({ setLoginModalFunc, setRegisterModalFunc, setIsLoggedinVal, setisSocLogin }) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [passwordType, setPasswordType] = useState("password")

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    }

    const [name, setName] = useState("");

    const setItems = (name, email, profilePic, SocLogin) => {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        if (SocLogin==="true")
            localStorage.setItem("SocLogin", "true")
        else
            localStorage.setItem("SocLogin", "false")
        if (email === "admin@cbigdtuw.in") {
            localStorage.setItem("AdminLogin", true)
            localStorage.setItem("SocLogin", "false")
        }
        else
            localStorage.setItem("AdminLogin", false)
    }

    const db = getFirestore(app);
    const signInWithGoogle = async (event) => {

        event.preventDefault();
        try {
            const res = await signInWithPopup(auth, provider);
            const user = res.user;
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
                alert("Not registered");
            }
            else {
                setItems(user.displayName, user.email, user.photoURL, "false");
                setIsLoggedinVal(true);
                setLoginModalFunc(false);
                setisSocLogin(false);
            }

        } catch (err) {
            setIsLoggedinVal(false);
            setisSocLogin(false);
            setLoginModalFunc(false);
        }
    };

    const signInwithEmail = async (event) => {

        if (email == "" || password == "") {
            return;
        }
        event.preventDefault();

        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            const user = res.user;
            const q = query(collection(db, "SocietyMembers"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
                alert("Not registered!!");
                return;
            }
            const docs_list = docs.docs.map(async (data) => {
                if (data.data().approved == false) {
                    alert("Not approved yet!!")
                    setIsLoggedinVal(false);
                    setisSocLogin(false);
                    return;
                }
                else {
                    setItems(user.soc, user.email, user.photoURL, "true");
                    setIsLoggedinVal(true);
                    setisSocLogin(true);
                    window.location.reload();

                }
            })
            setLoginModalFunc(false);
            window.location.reload();


        } catch (err) {
            alert("Invalid Credentials")
            setIsLoggedinVal(false);
            setisSocLogin(false);
            setLoginModalFunc(false);
        }
    };

    const triggerResetEmail = async (event) => {

        event.preventDefault();
        if (email === null || email === "undefined" || email == "") {
            alert("Enter email first !!");
        }
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email sent !!");
        setLoginModalFunc(false);
    }


    return (

        <div id="simpleModal" className="Modal" >
            <img className="logo" src={logo} />
            <div id="earthdiv" >
                <img src={earth} id="earth"></img>
            </div>

            <div>
                <nav className="navbar-expand-sm loginNav">

                    <button className="navbar-toggler navbar-light bg-light togglelogin" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-brand" id="navbarSupportedContent">
                        <ul id="LoginNavbar">
                            <li class="loginnav-item" onClick={() => { setLoginModalFunc(false) }}><Link to="/" style={{ background: "transparent" }}>HOME</Link></li>
                            <li class="loginnav-item" onClick={() => { setLoginModalFunc(false) }}><Link to="/About" style={{ background: "transparent" }}>ABOUT</Link></li>
                            <li class="loginnav-item" onClick={() => { setLoginModalFunc(false) }}><Link to="/FAQs" style={{ background: "transparent" }}>FAQs</Link></li>
                        </ul>
                    </div></nav>
            </div>

            <div id="Newacc">
                WANT TO CREATE A NEW ACCOUNT?
                <div></div><button id="regbtn" onClick={() => { setRegisterModalFunc(true); setLoginModalFunc(false) }}>REGISTER</button>
            </div>

            <div className='modal-content' id="modalContent">
                <div className='modal-header' id="ModalHeader">
                    <div id="login_heading">WELCOME BACK !</div>
                    <div className="closebtn" onClick={() => { setLoginModalFunc(false) }}>&times;</div>
                </div>

                <div className="modal-body" id="ModalBody">
                    <form id="LRform" action="">
                        <div className="textbox" >
                            <FaUserAlt />
                            <input placeholder="Name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} required></input>
                        </div>
                        <div className="textbox" >
                            <MdAlternateEmail />
                            <input placeholder="E-mail" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required></input>
                        </div>
                        <div className="textbox">
                            <FaLock />
                            <input type={passwordType} placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} required></input>

                            <div className="input-group-btn">
                                <a onClick={togglePassword} style={{ background: "transparent", border: "none" }}>
                                    {passwordType === "password" ? <AiFillEyeInvisible style={{ marginLeft: "2vw", height: "5.5vw", display: "block" }} /> : <AiFillEye style={{ marginLeft: "-2vw" }} />}
                                </a>
                            </div>

                        </div>
                        <span className="shadow-lg rounded" id="Google" onClick={signInWithGoogle}><FcGoogle /> Sign In with Google</span>
                        <button id="submitbtn" onClick={signInwithEmail}>LOGIN</button>
                        <div id="forgot">Don't remember your password? <a href='/' style={{ color: "#9747FF" }} onClick={triggerResetEmail}>Forgot Password</a></div>
                    </form>

                </div>
            </div>
        </div>
    )
}