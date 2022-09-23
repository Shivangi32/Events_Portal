import React from "react";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import "../App.css";

const Edit = (props) => {
  const [editmodalIsOpen, setIsOpen] = useState(false);
  let [EventLink, setEventLink] = useState();
  let [societyName, setSocietyName] = useState();
  let [eventName, setEventName] = useState();
  let [date, setDate] = useState();
  let [time, setTime] = useState();

  function openeditModal() {
    setIsOpen(true);
  }

  function afterOpeneditModal() {
    //subtitle.style.color = "#f00";
  }

  function closeeditModal() {
    setIsOpen(false);
  }

  return (
    <div className="modal-container">
      <Modal
        isOpen={editmodalIsOpen}
        onAfterOpen={afterOpeneditModal}
        onRequestClose={closeeditModal}
        contentLabel="Modal"
        className="Modal"
      >
        <div className="modal-header">
          <h2>ADD EVENT</h2>
          <div className="material-icons" onClick={closeeditModal}>
            cancel
          </div>
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
                    onChange={(e) => setTime(e.target.value)}
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div className="modal-btn">
              <button /*onClick={handleSubmit}*/>Save</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
