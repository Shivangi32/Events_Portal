import { icons } from 'react-icons';
import { editEvent, deleteEvent } from '../SocietyPage'
import "./Card.css"
import img from "./img.PNG"
import {EditEvent} from "./EditModal"
import { useState, useEffect } from "react";
import {MdDelete,MdModeEdit} from 'react-icons/md';
function Card(props) {

  let info = {
    id: props.id,
    soc: props.soc,
    key: props.key,
    EventName: props.EventName,
    date: props.date,
    time: props.time,
    link: props.link,
    approved: props.approved,

  }
  const [openEditModal,setopenEditModal]= useState(false);

  function openmodalFunc(value){
    setopenEditModal(value);
  }
  return (
    <div className="card">
            <div className="event_wrapper">
                <img className="event-img" src={img}/>
                <div className='info'>
                <div className="event_name">
                    <span>{props.EventName}</span>
                </div>
                <div className="event_society">
                    <span className="society_name">{props.soc}</span>
                </div>
                
                <div className="event_date">
                    <span className="date">{props.date} , {props.time}</span>
                </div>
                
                
                </div>
                <div className="event-action">
                <div className="event_register">
                    <button><span className='register' >REGISTER</span></button>
                </div>
                <div className="icon event_edit">
                  <MdModeEdit /*onClick={()=>{props.openModal()}}*/ onClick={()=>{openmodalFunc(true)}}/>
                  {openEditModal && <EditEvent info={info} openmodalFunc={openmodalFunc}/>}
                </div>
                <div className="icon event_delete">
                  <MdDelete onClick={() => deleteEvent(info)}/>
                </div>
                </div>
            </div>
        </div>
    
  );
}

export default Card;
