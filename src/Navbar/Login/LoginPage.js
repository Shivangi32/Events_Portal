import React, { useState } from 'react';
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "../Register/firebaseConfig";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export default function Login({ setModalFunc }) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submit() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
            });
    }

    return (

        <div id="simpleModal" className="Modal">
            <div className='modal-content'>
                <div className='modal-header'>
                    <div id="login_heading">Log In</div>
                    <div className="closebtn" onClick={() => { setModalFunc(false) }}>&times;</div>
                </div>
                <div className="modal-body">
                    <form className='form'>
                        <div className="textbox" >
                            <FaUserAlt />
                            <input placeholder="Email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                        </div>
                        <div className="textbox">
                            <FaLock />
                            <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                        </div>
                        <button id="submitbtn" onClick={()=>submit()}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}