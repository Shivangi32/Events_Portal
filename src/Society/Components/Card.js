import { icons } from "react-icons";
import { editEvent, deleteEvent } from "../SocietyPage";
import "./Card.css";
import img from "./img.PNG";
import { EditEvent } from "./EditModal";
import { useState, useEffect } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { getAccordionActionsUtilityClass } from "@mui/material";

function Card(props) {
  let info = {
    id: props.id,
    soc: props.soc,
    cnt: props.cnt,
    EventName: props.EventName,
    date: props.date,
    time: props.time,
    link: props.link,
    approved: props.approved,
    category: props.category,
  };
  const [openEditModal, setopenEditModal] = useState(false);

  function openmodalFunc(value) {
    setopenEditModal(value);
  }

  const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getMeridian(time) {
    if (time >= "12:00") {
      return "PM";
    } else {
      return "AM";
    }
  }

  function getTime(time) {
    let hh = parseInt(time.slice(0, 2));
    if (hh > 12) {
      hh = hh % 12;
      if (hh < 10) {
        return String("0" + hh + ":" + time.slice(3, 6));
      }
      return String(hh + ":" + time.slice(3, 6));
    }
    return time;
  }
  return (
    <div className="card col-3 col-md-5">
      <div className="card_wrapper">
        <img className="card-img" src={img} />
        <div className="info">
          <div className="event_name">
            <span>{props.EventName.toUpperCase()}</span>
          </div>
          <div className="event_society">
            <span className="society_name">{props.soc.toLowerCase()}</span>
          </div>

          <div className="event_date">
            <span className="date">
              {props.date.slice(8, 10)}{" "}
              {months[parseInt(props.date.slice(5, 7))]}{" "}
              {props.date.slice(0, 4)}
              {", "}
            </span>
            <span className="time">
              {getTime(props.time)} {getMeridian(props.time)}
              {" IST"}
            </span>
          </div>
        </div>
        <div className="event-action">
          <div className="event_register">
            <a href={props.link} target="_blank">
              <button>
                <span className="register">REGISTER</span>
              </button>
            </a>
          </div>
          <div className="icon event_edit">
            <MdModeEdit
              /*onClick={()=>{props.openModal()}}*/ onClick={() => {
                openmodalFunc(true);
              }}
            />
            {openEditModal && (
              <EditEvent info={info} openmodalFunc={openmodalFunc} />
            )}
          </div>
          <div className="icon event_delete">
            <MdDelete onClick={() => deleteEvent(info)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
