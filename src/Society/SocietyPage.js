import "../App.css";
import plus from "./images/plus.png";
import Modal from "react-modal";
import { db } from "../Navbar/Register/firebaseConfig";
import { useState ,useEffect} from "react";

import Card from "./Components/Card.js";
import { BrowserRouter as Router, Route, Navigate, Link } from "react-router-dom";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  setDoc, doc
} from "firebase/firestore";


Modal.setAppElement("#root");

function SocietyPage({ email, setShowNavFunc }) {


  setShowNavFunc(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);
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

    const soc_collection = query(collection(db, "Societies"));
    const socdocs = await getDocs(soc_collection);
    const soc_list = socdocs.docs.map(async (socData) => {

      const socName=socData.data().soc;
      const q = query(collection(db, `Events/soc_events/${socName}`));

      const curr_soc = await getDocs(q);
      const events_list = curr_soc.docs.map( (doc) => {

        const data = doc.data();
        let info = {
          soc: socName,
          key: cards.length,
          EventName: data.EventName,
          date: data.date,
          time: data.time,
        };
        setCards(current=>[...current,info]);
      })
    })
  } 

  const handleSubmit = async (e) => {

    if (societyName == undefined || eventName == undefined || date == undefined || time == undefined) 
       { return; }
    e.preventDefault();

    const temp = societyName.toLowerCase();
    setSocietyName(temp);

    let info = {
      soc: societyName,
      key: cards.length,
      EventName: eventName,
      date: date,
      time: time,
    };

    await addDoc(collection(db, `Events/soc_events/${temp}`), info);
    setCards(current=>[...current,info]);
    closeModal();
  }

  useEffect(() => {
    onwindowLoad();
  }, [])
  /*adds cards to site*/

  cards.forEach((c) => {
    const temp=c.soc.toUpperCase();
    let ca = <Card soc={temp} EventName={c.EventName} date={c.date} time={c.time} />;
    eCards.push(ca);
  });


  return (

    <div className="societyPage ">
      <div className="societyName">
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
