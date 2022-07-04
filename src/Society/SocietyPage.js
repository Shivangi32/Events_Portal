import "../App.css";
import plus from "./images/plus.png";
import Modal from "react-modal";
import { useState } from "react";
import Card from "./Components/Card.js";

import { collection, getDocs } from 'firebase/firestore/lite';
import { addDoc, setDoc, doc, getFirestore, updateDoc } from "firebase/firestore";


Modal.setAppElement("#root");

function SocietyPage() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  let eCards = [];

  let [societyName, setSocietyName] = useState();
  let [eventName, setEventName] = useState();
  let [date, setDate] = useState();
  let [time, setTime] = useState();

  function handleSubmit(e) {

    if (societyName == undefined || eventName == undefined || date == undefined || time == undefined) { return; }
    e.preventDefault();

    let info = {
      key: cards.length,
      EventName: eventName,
      date: date,
      time: time,
    };
    let infos = [...cards, info];
    setCards(infos);
    const db = getFirestore();
    const currDoc = doc(db, `Events/${societyName}`);
    const obj = { infos };
    setDoc(currDoc, obj)
      .then(() => {
        console.log(info);
      })
      .catch((e) => {
        console.log(e);
      });
    console.log("Document written with ID: ", infos);


    closeModal();
  }

  cards.forEach((c) => {
    let ca = <Card EventName={c.EventName} date={c.date} time={c.time} />;
    eCards.push(ca);
  });

  return (
    <div className="societyPage ">
      <div className="societyName">
        <h1>INSTINCT</h1>
        <hr></hr>
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
                </div>
                <div className="fields">
                  <div className="fields-colums">
                    <div>
                      <label htmlFor="date">Date</label>
                    </div>
                    <div className="small-ip">
                      <input
                        type="text"
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
                        type="text"
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

export default SocietyPage;
