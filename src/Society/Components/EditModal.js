import React from "react";
import Modal from "react-modal";
import { db } from "../../firebaseConfig";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import {
  query,
  getDocs,
  collection,
  where,
  deleteDoc,
  updateDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import Example from "./Tags";

export const EditEvent = (props) => {
  console.log(props)
  const values = localStorage.getItem("email").split("@");
  const curr_soc = values[0];
  const soc_Name = curr_soc.toLowerCase();
  let [EventLink, setEventLink] = useState(props.info.link);
  let [societyName, setSocietyName] = useState(props.info.soc);
  let [eventName, setEventName] = useState(props.info.EventName);
  let [date, setDate] = useState();
  let [time, setTime] = useState(props.info.time);
  const [cat_selected,setcat]=useState(props.info.category);

  function category_set(val){
    setcat(val);
  }
  function editmodalIsOpen() {
    props.openmodalFunc(true);
  }
  function closeeditModal() {
    props.openmodalFunc(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      societyName === undefined ||
      eventName === undefined ||
      date === undefined ||
      time === undefined ||
      EventLink === undefined ||
      societyName === "" ||
      eventName === "" ||
      date === "" ||
      time === "" ||
      EventLink === ""
    ) {
      return;
    }

    /*Check Date*/
    const todaydate = new Date();
    let currentyear = todaydate.getFullYear();
    let datevalues = date.split("-");
    if (datevalues[0] < currentyear || datevalues[0] > currentyear + 1) {
      alert("Wrong Date");
      return;
    }

    const temp = societyName.toLowerCase();
    if (soc_Name !== temp) {
      alert("You can add events only of your society!!");
      closeeditModal();
      return;
    }
    setSocietyName(temp);

    let info = {
      soc: societyName,
      key: props.info.cnt,
      EventName: eventName,
      date: date,
      link: EventLink,
      approved: "false",
      category: cat_selected,
      time: time,
    };

    const docref = doc(db, `Events/soc_events/${soc_Name}`, props.info.id);
    closeeditModal();
    await updateDoc(docref, info);
    window.location.reload();
  };

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
          <div className="modal-close">
            <MdClose onClick={closeeditModal} />
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
                  value={societyName}
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
                  value={eventName}
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
                  value={EventLink}
                  onChange={(e) => setEventLink(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label>Event Category</label>
              </div>
              <div className="big-ip">
                <Example category_set={category_set} category={props.info.category}/>
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
                    value={time}
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
      </Modal>
    </div>
  );
};
