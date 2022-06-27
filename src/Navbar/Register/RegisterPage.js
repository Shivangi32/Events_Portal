import React, { useState } from 'react';
import "./register.css";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app, auth, provider } from "./firebaseConfig";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"

export default function Register({ setModalFunc, setIsLoggedinVal }) {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const setItems = (name, email, profilePic) => {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

    }

    const signInWithGoogle = event => {

        event.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;
                setItems(user.displayName, user.email, user.photoURL);
                setIsLoggedinVal(true);
                setModalFunc(false);
            })
            .catch((error) => {
                setModalFunc(false);
                setIsLoggedinVal(false);
            });

    };
    const createUser = event => {

        if (email == "" || password == "") {
            return;
        }
        event.preventDefault();
        setModalFunc(false);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                setItems(user.displayName, user.email, user.photoURL);
                setIsLoggedinVal(true);
                setModalFunc(false);
            })
            .catch((error) => {

                setIsLoggedinVal(false);
                setModalFunc(false);
            });
    }

    
    return (

        <div id="simpleModal" className="Modal">
            <div className='modal-content' id="modalContent">
                <div className='modal-header' id="ModalHeader">
                    <div id="register_head">Register</div>
                    <div className="closebtn" onClick={() => { setModalFunc(false) }}>&times;</div>
                </div>
                <div className="modal-body" id="ModalBody">
                    <form id="LRform" action="">
                        <div className="textbox" >
                            <FaUserAlt />
                            <input placeholder="Email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required></input>
                        </div>
                        <div className="textbox">
                            <FaLock />
                            <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} required></input>
                        </div>
                        <span className="shadow-lg bg-white rounded" id="Google" onClick={signInWithGoogle}><FcGoogle /> Sign In with Google</span>
                        <button id="submitbtn" onClick={createUser}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}