import React, { useState, useEffect } from "react";
import "./Card.css";
import img from "./img.PNG";
import { query, getDocs, collection, where, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const Event = ({ event: { soc, EventName, date, time, link } }) => {
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
    <div className="event col-3 col-md-5">
      <div className="event_wrapper">
        <img className="event-img" src={img} />
        <div className="info">
          <div className="event_name">
            <span>{EventName.toUpperCase()}</span>
          </div>
          <div className="event_society">
            <span className="society_name">{soc}</span>
          </div>

          <div className="event_date">
            <span className="date">
              {date.slice(8, 10)} {months[parseInt(date.slice(5, 7))]}{" "}
              {date.slice(0, 4)}
              {", "}
            </span>
            <span className="time">
              {getTime(time)} {getMeridian(time)}
              {" IST"}
            </span>
          </div>
          <div className="event_register">
            <a href={link} target="_blank">
              <button>
                <span className="register">REGISTER</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
