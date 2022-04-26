import React from 'react';
import "./header.css"
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa"
import Heading from './Heading';
import '../Event_Card/Card';
import Card from '../Event_Card/Card';

export default function Header() {
    return (
        <div>
            <div className='stars'>
                <div className="twinkling">
                    <div className="clouds">
                        <div className="navbar">
                            <div className="container-fluid">
                                <a href="/" className="navbar-brand"><h2>Home</h2></a>
                                <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a href="/" className="nav-link active" aria-current="page">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/" className="nav-link active" aria-current="page">Socities</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/" className="nav-link active" aria-current="page">FAQS</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        // <div>
        //     <nav className="navbar navbar-expand-lg navbar-light">
        //         <div className="container-fluid">
        //             <a className="navbar-brand" href="/">Navbar</a>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li className="nav-item">
        //                         <a className="nav-link active" aria-current="page" href="/">Home</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link active" aria-current="page" href="/">About</a>
        //                     </li>
                            
        //                 </ul>
        //                 <form className="d-flex" id="navside">
        //                     <BsFillPersonPlusFill />
        //                     <button>Login</button>
        //                     <FaPlus />
        //                     <button>Register</button>
        //                     <i className="fa fa-sign-in" aria-hidden="true"></i>
        //                 </form>
        //             </div>
        //         </div>
        //     </nav>
        //     <div>
        //         <Heading/>
        //     </div>
        //     {/* <div className="events">
        //         <Card />
        //     </div> */}


        // </div>
    )
}
