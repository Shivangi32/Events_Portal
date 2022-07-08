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
                        <MdEditCalendar size={'4em'}/>
                        <h4>100</h4>
                        <h6>Total Posts</h6>
                    </div>
                    <div className="column post1">
                        <BsPatchCheck size={'4em'}/>
                        <h4>100</h4>
                        <h6>Active Posts</h6>
                    </div>
                    <div className="column post1">
                        <BsEye size={'4em'}/>
                        <h4>100</h4>
                        <h6>Total Views</h6>
                    </div>
                </div>
            </div>   
        </div>
     )
}


export default Statistics;
