import React, { useState } from 'react';
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { app, auth ,signInWithGoogle } from "../Register/firebaseConfig";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {FcGoogle} from "react-icons/fc"

export default function Login({ setModalFunc, setUpUI }) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit= event=> {

        if(email=="" || password=="")
        {
            return;
        }
        event.preventDefault();
        setModalFunc(false);
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
                            <input  placeholder="Email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required></input>
                        </div>
                        <div className="textbox">
                            <FaLock />
                            <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} required></input>
                        </div>
                        <span className="shadow-lg bg-white rounded" id="Google" onClick={signInWithGoogle}><FcGoogle/> Sign In with Google</span>
                        <button id="submitbtn" onClick={submit}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}