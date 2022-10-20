import React from "react";
import { MdEventAvailable } from "react-icons/md";
import './statsCounter.css';
import { FcPlanner } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { MdEditCalendar } from "react-icons/md";
import {BsPatchCheck} from "react-icons/bs";
import {BsEye} from "react-icons/bs";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Statistics = () => {

    return (
        <div>
            <div className="stats">
                <div className="stats-bar">
                    <div className="column post1">
                        {/* <MdEditCalendar size={'4em'}/> */}
                        <h6>New Posts</h6>
                        <h4>50</h4>
                    </div>
                    <div className="column post1">
                        {/* <BsPatchCheck size={'4em'}/> */}
                        <h6>Visits per day</h6>
                        <h4>100</h4>
                    </div>
                    <div className="column post1">
                        {/* <BsEye size={'4em'}/> */}
                        <h6>Login per Day</h6>
                        <h4>5</h4>
                    </div>
                </div>
            </div>   
        </div>
     )
}


export default Statistics;
