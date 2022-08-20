import "../App.css";
import plus from "./images/plus.png";
import Modal from "react-modal";
import { db } from "../firebaseConfig";
import { useState, useEffect } from "react";

import Card from "./Components/Card.js";
//import { BrowserRouter as Router, Route, Navigate, Link } from "react-router-dom";
import {
  query,
  getDocs,
  collection,
  where, deleteDoc,
  addDoc,
  setDoc, doc
} from "firebase/firestore";


Modal.setAppElement("#root");
var curr_soc = "";

function SocietyPage({ email, setShowNavFunc }) {


  setShowNavFunc(true);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);
  let [EventLink, setEventLink] = useState();
  let [societyName, setSocietyName] = useState();
  let [eventName, setEventName] = useState();
  let [date, setDate] = useState();
  let [time, setTime] = useState();
  let eCards = [];


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onwindowLoad = async () => {


    console.log("window loaded");
    const values = localStorage.getItem("email").split("@");
    const temp = values[0];
    curr_soc = temp;
    const soc_collection = query(collection(db, "Societies"));
    const socdocs = await getDocs(soc_collection);
    const soc_list = socdocs.docs.map(async (socData) => {

      const socName = socData.data().soc;
      if (temp !== socName) {
        return;

      }
      const q = query(collection(db, `Events/soc_events/${socName}`));

      const curr_soc = await getDocs(q);
      const events_list = curr_soc.docs.map((doc) => {

        const data = doc.data();
        let info = {
          id: doc.id,
          soc: socName,
          key: cards.length,
          EventName: data.EventName,
          date: data.date,
          time: data.time,
          approved: data.approved
        };
        setCards(current => [...current, info]);
      })
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (societyName === undefined || eventName === undefined || date === undefined || time === undefined || EventLink === undefined
      || societyName === "" || eventName === "" || date === "" || time === "" || EventLink === "") { return; }

    /*Check Date*/
    const todaydate = new Date();
    let currentyear = todaydate.getFullYear();
    let datevalues = date.split("-");
    console.log(datevalues[0]);
    if (datevalues[0] < currentyear || datevalues[0] > currentyear + 1) {
      alert("Wrong Date");
      return;
    }

    /*check Society*/

    const values = localStorage.getItem("email").split("@");
    const curr_soc = values[0];
    const temp = societyName.toLowerCase();
    if (curr_soc !== temp) {
      alert("You can add events only of your society!!");
      closeModal();
      return;
    }
    setSocietyName(temp);

    let info = {
      soc: societyName,
      key: cards.length,
      EventName: eventName,
      date: date,
      approved: "false",
      time: time,
    };

    await addDoc(collection(db, `Events/soc_events/${temp}`), info);
    setCards(current => [...current, info]);
    closeModal();
    window.location.reload();
  }

  useEffect(() => {
    onwindowLoad();
  }, [])


  /*adds cards to site*/
  cards.forEach((c) => {
    const temp = c.soc.toUpperCase();
    let ca = <Card soc={temp} EventName={c.EventName} date={c.date} time={c.time} approved={c.approved} id={c.id} />;
    eCards.push(ca);
  });


  return (

    <div className="societyPage ">
      <div className="societyName">
        {curr_soc}
      </div>
      <div className="cards">
        <button className="addCard" onClick={openModal}>
          <img src={plus} alt="sign" />
          <h4>Add Event</h4>
        </button>
        <div className="modal-container">
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Modal"
            className="Modal"
          >
            <div className="modal-header">
              <h2>ADD EVENT</h2>
              <div className="material-icons" onClick={closeModal}>
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
                      placeholder="Add Event Name"
                      onChange={(e) => setEventName(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="EventLink">Event registration Link</label>
                  </div>
                  <div className="big-ip">
                    <input
                      type="url"
                      id="EventLink"
                      placeholder="Add Event Link"
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
                        placeholder="DD/MM/YY"
                        onChange={(e) => setDate(e.target.value)}
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
                  <button onClick={handleSubmit}>Save</button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
        {eCards}
      </div>
    </div>
  );
}

export const deleteEvent = async (e) => {
  const socName = e.soc.toLowerCase();
  console.log(e);
  const docref = doc(db, `Events/soc_events/${socName}`, e.id);
  console.log(docref);
  deleteDoc(docref);
  window.location.reload();

}

export const updateEvent = async (e) => {

}
/*
//DELETE FUNCTION
export function deleteEvent(event) {
 ref
   .doc(event.key)
   .delete()
   .catch((err) => {
     console.error(err);
   });
}

// EDIT FUNCTION
export function editEvent(updatedEvent) {
 setLoading();
 ref
   .doc(updatedEvent.key)
   .update(updatedEvent)
   .catch((err) => {
     console.error(err);
   });
}
*/
export default SocietyPage;
