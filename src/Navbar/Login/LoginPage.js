import React, { useState } from 'react';
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { app, auth ,signInWithGoogle } from "../Register/firebaseConfig";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {FcGoogle} from "react-icons/fc"

export default function Login({ setModalFunc }) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit= event=> {

        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result);
                const name=result.user.displayName;
                const email=result.user.email;
                const profilePic=result.user.photoURL;
         
                localStorage.setItem("name",name);
                localStorage.setItem("email",email);
                localStorage.setItem("profilePic",profilePic);
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
                    <form className='form' action="">
                        <div className="textbox" >
                            <FaUserAlt />
                            <input placeholder="Email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                        </div>
                        <div className="textbox">
                            <FaLock />
                            <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                        </div>
                        <span className="shadow-lg bg-white rounded" id="Google" onClick={signInWithGoogle}><FcGoogle/> Sign In with Google</span>
                        <button id="submitbtn" onClick={submit}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}