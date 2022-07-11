import "../App.css";
// import AddEventCard from "./Components/AddEventCard";
import plus from "./images/plus.png";
import Modal from "react-modal";
import React, { useState , useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import { Fragment } from "react";
import firebase from "./firebase";
// import {db} from "../Navbar/Register/firebaseConfig"
import Card from "./Components/Card";

import {  collection, getDocs  } from 'firebase/firestore/lite';
import {  addDoc, setDoc, doc,getFirestore, updateDoc, QuerySnapshot } from "firebase/firestore"; 

// import EventForm from "./Components/EventForm";
import addToDB from "../Navbar/Register/firebaseConfig"

Modal.setAppElement("#root");

function SocietyPage() {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);


  const ref = firebase.firestore().collection("events")
  console.log(ref);

  function getEvents() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items =[];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setEvents(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getEvents();
  }, [])

  //ADD FUNCTION
  function addEvent(newEvent) {
    ref
      .doc(newEvent.id)
      .set(newEvent)
      .catch((err) => {
        console.error(err);
      });
  }

  //DELETE FUNCTION
  function deleteEvent(event) {
    ref
      .doc(event.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  //EDIT FUNCTION
  function editEvent(updatedEvent) {
    ref
      .doc(updatedEvent.id)
      .update(updatedEvent)
      .catch((err) => {
        console.error(err);
      });
  }

  if(loading) {
    return <h1>Loading..</h1>;
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  let eCards = [];

  let [society_name, setsociety_name] = useState();
  let [title, settitle] = useState();
  let [date, setDate] = useState();
  let [time, setTime] = useState();

  function handleSubmit(e) {

    if(society_name===undefined || title===undefined || date===undefined )
    {  return;}
    console.log(society_name);
    console.log(title);
    console.log(date);
    e.preventDefault();
    
    let info = {
      id: uuidv4(),
      title: title,
      date: date,
      // time: time,
    };
    let infos = [...cards, info];
    setCards(infos);
    const db=getFirestore();
      const currDoc=doc(db,`Events/Minerva/${title}/${date}`);
      setDoc(currDoc,info)
       .then(()=>{
        console.log(info);
       })
        .catch((e)=>{
          console.log(e);
        });
      console.log("Document written with ID: ",infos);

    
    closeModal();
  }

  cards.forEach((c) => {
    let ca = <Card title={c.title} date={c.date} />;
    eCards.push(ca);
  });

  // return (
  //   <Fragment>
  //     <h1>Events (SNAPSHOT)</h1>
  //   </Fragment>
  // )

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
            {events.map((event) => (
              <div key={event.id}>
                <div className="modal-body">
                  <form className="field-rows">
                    <div className="field-colums">
                      <div>
                        <label htmlFor="title">Society Name</label>
                      </div>
                      <div className="big-ip">
                        <input
                          type="text"
                          id="title"
                          placeholder="Add Society Name"
                          // onChange={(e) => setsociety_name(e.target.value)}
                          required
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="title">Event Name</label>
                      </div>
                      <div className="big-ip">
                        <input
                          type="text"
                          id="title"
                          placeholder="Add Event Name"
                          onChange={(e) => settitle(e.target.value)}
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
                {/* <h2 style={"color:red;"}>{event.socity_name}</h2>
                <h4>{event.title}</h4>
                <p>{event.date_time}</p> */}
              </div>
            ))}
          </Modal>
        </div>
        {eCards}
      </div>
    </div>
  );
}

export default SocietyPage;
