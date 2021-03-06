import React, { useState } from 'react';
import "./register.css";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app, auth, provider } from "../../firebaseConfig";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

export default function Register({ setModalFunc, setIsLoggedinVal }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            setModalFunc(false);
        } catch (err) {
            console.error(err);
            setIsLoggedinVal(false);
            setModalFunc(false);
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
        else
        {
            alert("Already registered");
        }
        setModalFunc(false);
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
                        <span className="shadow-lg bg-white rounded" id="Google" onClick={signInWithGoogle}><FcGoogle /> Sign Up with Google</span>
                        <button id="submitbtn" onClick={createUser}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}