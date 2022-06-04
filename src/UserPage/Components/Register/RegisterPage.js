import React, { useState } from 'react';
import "./register.css"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig"


export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function submit() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (

        <form  className='form'>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <label>Password</label>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button onSubmit={submit()}>Submit</button>
        </form>
    )

}