import React, { useState } from 'react';
import "./login.css";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

export default function Login({ setLoginModalFunc, setRegisterModalFunc, setIsLoggedinVal, setisSocLogin }) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const setItems = (name, email, profilePic) => {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

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
                setItems(user.displayName, user.email, user.photoURL);
                setIsLoggedinVal(true);
                setLoginModalFunc(false);
                setisSocLogin(false);
            }

        } catch (err) {
            console.error(err);
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
            setLoginModalFunc(false);
            setItems(user.displayName, user.email, user.photoURL);
            setIsLoggedinVal(true);
            setisSocLogin(true);
            window.location.reload();

        } catch (err) {
            console.error(err);
            alert("Invalid Credentials")
            setIsLoggedinVal(false);
            setisSocLogin(false);
            setLoginModalFunc(false);
        }
    };

    return (

        <div id="simpleModal" className="Modal" >
            <img className="logo" src={logo} />
            <div id="earthdiv" >
            <img src={earth} id="earth"></img>
            </div>
            
            <div>
                <ul id="LoginNavbar">
                    <Link to="/"><li class="loginnav-item" onClick={()=>{setLoginModalFunc(false)}}>HOME</li></Link>
                    <Link to="/About"><li class="loginnav-item" onClick={()=>{setLoginModalFunc(false)}}>ABOUT</li></Link>
                    <Link to="/FAQs"><li class="loginnav-item" onClick={()=>{setLoginModalFunc(false)}}>FAQs</li></Link>
                </ul>
            </div>
            
            <div id="Newacc">
                WANT TO MAKE A NEW ACCOUNT?
                <div></div><button id="regbtn"onClick={() => { setRegisterModalFunc(true); setLoginModalFunc(false) }}>REGISTER</button>
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
                            <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} required></input>
                        </div>
                        <span className="shadow-lg rounded" id="Google" onClick={signInWithGoogle}><FcGoogle /> Sign In with Google</span>
                        <button id="submitbtn" onClick={signInwithEmail}>LOGIN</button>
                        <div id="forgot">Don't remember your password? Forgot password</div>
                    </form>

                </div>
            </div>
        </div>
    )
}