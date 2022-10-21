import React, { useState, useEffect } from "react";
import "./Card.css";
import img from "./img.PNG";
import { query, getDocs, collection, where, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const Event = ({ event: { soc, EventName, date, time, link } }) => {
  const months = [
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
  return (
    <div className="event">
      <div className="event_wrapper">
        <img className="event-img" src={img} />
        <div className="info">
          <div className="event_name">
            <span>{EventName.toUpperCase()}</span>
          </div>
          <div className="event_society">
            <span className="society_name">{soc.toUpperCase()}</span>
          </div>

          <div className="event_date">
            <span className="date">
              {date.slice(8, 10)} {months[parseInt(date.slice(5, 7))]}{" "}
              {date.slice(0, 4)}{","} {time}
            </span>
          </div>
          <div className="event_register">
            <button href={link}>
              <span className="register">REGISTER</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
