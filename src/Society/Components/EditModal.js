import React from "react";
import Modal from "react-modal";

import {MdClose} from "react-icons/md"
import { useState, useEffect } from "react";

export const EditEvent = (props) => {
  let [EventLink, setEventLink] = useState();
  let [societyName, setSocietyName] = useState();
  let [eventName, setEventName] = useState();
  let [date, setDate] = useState();
  let [time, setTime] = useState();


  function editmodalIsOpen() {
    props.openmodalFunc(true);
  }
  function closeeditModal() {
    props.openmodalFunc(false);
  }

  console.log(props.info)

  
  return (
    <div className="modal-container">
      <Modal
        isOpen={true}
        onRequestClose={closeeditModal}
        contentLabel="Modal"
        className="Modal"
      >
        <div className="modal-header">
          <h2>EDIT EVENT</h2>
          <MdClose  onClick={closeeditModal}/>
        </div>
        <div className="line"></div>
        <div className="modal-body">
          <form className="field-rows">
            <div className="field-colums">
              <div>
                <label htmlFor="EventName">Society Name</label>
              </div>
              <div className="big-ip">
                <input
                  type="text"
                  id="EventName"
                  placeholder="Add Society Name"
                  value={props.info.soc}
                  onChange={(e) => setSocietyName(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="EventName">Event Name</label>
              </div>
              <div className="big-ip">
                <input
                  type="text"
                  id="EventName"
                  value={props.info.EventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="Add Event Name"
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="EventLink">Event registration Link</label>
              </div>
              <div className="big-ip">
                <input
                  type="text"
                  id="EventLink"
                  placeholder="Add Event Link"
                  value={props.info.link}
                  onChange={(e) => setEventLink(e.target.value)}
                  required
                ></input>
              </div>
            </div>
            <div className="fields">
              <div className="fields-colums">
                <div>
                  <label htmlFor="date">Date</label>
                </div>
                <div className="small-ip">
                  <input
                    type="date"
                    id="date"
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="DD/MM/YY"
                  required
                  ></input>
              </div>
            </div>
            <div className="field-colums">
              <div>
                <label htmlFor="time">Time</label>
              </div>
              <div className="small-ip">
                <input
                  type="time"
                  id="time"
                  placeholder="Add Event Time"
                  value={props.info.time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                ></input>
              </div>
            </div>
        </div>
        <div className="modal-btn">
          <button onClick={handleSubmit}>Save</button>
        </div>
      </form>
    </div>
      </Modal >
    </div >
  );
};
