import React, { useState } from 'react';
import "./register.css";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app, auth, provider } from "../../firebaseConfig";
import { FaUserAlt, FaLock } from "react-icons/fa";
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
    addDoc,
} from "firebase/firestore";

import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"

export default function Register({ setLoginModalFunc, setRegisterModalFunc, setIsLoggedinVal }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [confirmPasswordType, setConfirmPasswordType] = useState("password")

    const togglePassword = () => {
        if (confirmPasswordType === "password") {
            setConfirmPasswordType("text");
        } else {
            setConfirmPasswordType("password");
        }
    }

    const [confirmpassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");

    const db = getFirestore(app);

    const signInWithGoogle = async (event) => {
        event.preventDefault();
        try {
            const res = await signInWithPopup(auth, provider);
            const user = res.user;
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {

                await addDoc(collection(db, "users"), {
                    uid: user.uid,
                    name: user.displayName,
                    authProvider: "google",
                    email: user.email,
                });
                alert("Registered successfully");
            }
            else {
                alert("Already registered!!");
            }
            setRegisterModalFunc(false);
        } catch (err) {
            console.error(err);
            setIsLoggedinVal(false);
            setRegisterModalFunc(false);
        }
    };

    const createUser = async (event) => {

        if (email == "" || password == "") {
            return;
        }
        if (email.includes("cbigdtuw.in") == false) {
            alert("Invalid Credentials!!");
            return;
        }

        if (password != confirmpassword) {
            alert("Password mismatch!!");
            return;
        }

        event.preventDefault();

        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        const q = query(collection(db, "SocietyMembers"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "SocietyMembers"), {
                uid: user.uid,
                authProvider: "cbigdtuw",
                email: user.email,
            });
            alert("registered successfully!!");
        }
        else {
            alert("Already registered");
        }
        setRegisterModalFunc(false);
    }


    return (

        <div id="simpleModal" className="Modal">
            <img className="logo" src={logo} />
            <div id="earthdiv" >
                <img src={earth} id="earth"></img>
            </div>
            <div>
                <ul id="LoginNavbar">
                    <li class="loginnav-item" onClick={() => { setRegisterModalFunc(false) }}><Link to="/" style={{ background: "transparent" }}>HOME</Link></li>
                    <li class="loginnav-item" onClick={() => { setRegisterModalFunc(false) }}><Link to="/About" style={{ background: "transparent" }}>ABOUT</Link></li>
                    <li class="loginnav-item" onClick={() => { setRegisterModalFunc(false) }}><Link to="/FAQs" style={{ background: "transparent" }}>FAQs</Link></li>
                </ul>
            </div>
            <div id="Newacc">
                ALREADY HAVE AN ACCOUNT?
                <div></div>
                <button id="regbtn" onClick={() => { setRegisterModalFunc(false); setLoginModalFunc(true) }}>LOGIN</button>
            </div>
            <div className='modal-content' id="modalContent">
                <div className='modal-header' id="ModalHeader">
                    <div id="register_head">WELCOME!</div>
                    <div className="closebtn" onClick={() => { setRegisterModalFunc(false) }}>&times;</div>
                </div>
                <div className="modal-body" id="ModalBody">
                    <form id="LRform" action="">
                        <   div className="textbox" >
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
                        <div className="textbox">
                            <FaLock />
                            <input type={confirmPasswordType} placeholder='Confirm Password' value={confirmpassword} onChange={(e) => { setConfirmPassword(e.target.value) }} required></input>

                            <div className="input-group-btn">
                                <button onClick={togglePassword} style={{ background: "transparent", border: "none" }}>
                                    {confirmPasswordType === "password" ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button>
                            </div>
                        </div>
                            <span className="shadow-lg rounded" id="Google" onClick={signInWithGoogle}><FcGoogle /> Sign Up with Google</span>
                            <button id="submitbtn" onClick={createUser}>REGISTER</button>
                    </form>

                </div>
            </div>
        </div>
    )
}