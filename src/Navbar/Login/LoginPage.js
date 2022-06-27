import React, { useState } from 'react';
import "./login.css";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app, auth, provider } from "../Register/firebaseConfig";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"

export default function Login({ setModalFunc, setIsLoggedinVal }) {


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
                console.log(error);
                setIsLoggedinVal(false);
                setModalFunc(false);
            });

    };

    const signInwithEmail = event => {

        if (email == "" || password == "") {
            return;
        }
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                setItems(user.displayName, user.email, user.photoURL);
                setModalFunc(false);
                setIsLoggedinVal(true);
            })
            .catch((error) => {

                console.log(error);
                setModalFunc(false);
                setIsLoggedinVal(false);
            });
    }

    return (

        <div id="simpleModal" className="Modal" >
            <div className='modal-content' id="modalContent">
                <div className='modal-header' id="ModalHeader">
                    <div id="login_heading">Log In</div>
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
                        <button id="submitbtn" onClick={signInwithEmail}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}