import { icons } from 'react-icons';
import { editEvent, deleteEvent } from '../SocietyPage'
import "./Card.css"
import img from "./img.PNG"
import {MdDelete,MdModeEdit} from 'react-icons/md';
function Card(props) {

  let info = {
    id: props.id,
    soc: props.soc,
    key: props.key,
    EventName: props.EventName,
    date: props.date,
    time: props.time,
    approved: props.approved,

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
                    <span className="date">18 August 2022 , {props.time}</span>
                </div>
                
                
                </div>
                <div className="event-action">
                <div className="event_register">
                    <button><span className='register' >REGISTER</span></button>
                </div>
                <div className="icon event_edit">
                  <MdModeEdit/>
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
