import "../App.css";
import plus from "./images/plus.png";
import Modal from "react-modal";
import { db } from "../firebaseConfig";
import { useState, useEffect } from "react";
import "./Society.css";
import Example from "./Components/Tags";
import { MdClose } from "react-icons/md";
import Card from "./Components/Card.js";
//import { BrowserRouter as Router, Route, Navigate, Link } from "react-router-dom";
import {
  query,
  getDocs,
  collection,
  where,
  deleteDoc,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";

Modal.setAppElement("#root");

function SocietyPage({ email }) {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [cat_selected, setcat] = useState([]);
  let [EventLink, setEventLink] = useState();
  let [societyName, setSocietyName] = useState("");
  let [eventName, setEventName] = useState("");
  let [date, setDate] = useState("");
  let [time, setTime] = useState("");
  let eCards = [];
  let [curr_soc, setCurr_soc] = useState("");
  let soc_Name = "";


  function category_set(val) {
    setcat(val);
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const setEvents = async () => {

    var found = false;
    soc_Name=curr_soc.toLowerCase();
    const soc_collection = query(collection(db, "Societies"));
    const socdocs = await getDocs(soc_collection);
    const soc_list = socdocs.docs.map(async (socData) => {
      const socName = socData.data().soc.toLowerCase();
      if (soc_Name !== socName || found == true) {
        return;
      }
      found = true;
      const q = query(collection(db, `Events/soc_events/${socName}`));

      const curr_soc = await getDocs(q);
      const events_list = curr_soc.docs.map((doc) => {
        const data = doc.data();
        let info = {
          id: doc.id,
          soc: socName,
          key: cards.length,
          EventName: data.EventName,
          category: data.category,
          date: data.date,
          time: data.time,
          link: data.link,
          approved: data.approved,
        };
        setCards((current) => [...current, info]);
      });
    });
  }
  const onwindowLoad = async () => {
    const q = query(collection(db, "SocietyMembers"), where("email", "==", localStorage.getItem("email")));
    const docs = await getDocs(q);
    const docs_list = docs.docs.map(async (data) => {

      setCurr_soc(data.data().soc);
      setSocietyName(data.data().soc);
    })
  };

  useEffect(() => {
    setEvents();
  }, [curr_soc]);

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

    /*check Society*/

    const temp = societyName.toLowerCase();
    if (curr_soc.toLowerCase() !== temp) {
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
      link: EventLink,
      category: cat_selected,
      approved: "false",
      time: time,
    };

    await addDoc(collection(db, `Events/soc_events/${temp}`), info);
    setCards((current) => [...current, info]);
    closeModal();

    window.location.reload();
  };

  useEffect(() => {
    onwindowLoad();
  }, []);

  /*adds cards to site*/
  cards.forEach((c) => {
    const temp = c.soc.toUpperCase();
    let ca = (
      <Card
        soc={temp}
        EventName={c.EventName}
        date={c.date}
        time={c.time}
        link={c.link}
        approved={c.approved}
        id={c.id}
        cnt={c.key}
        category={c.category}
      />
    );
    eCards.push(ca);
  });

  return (
    <div className="societyPage ">
      <div className="societyName">{curr_soc.toUpperCase()}</div>
      <div className="society-container">
        <div className="society-sub-heading">Society overview</div>
        <button className="addevent" onClick={openModal}>
          +
        </button>
      </div>

      <div className="cards">
        <div className="modal-container">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Modal"
            className="Modal"
          >
            <div className="modal-header">
              <h2>ADD EVENT</h2>
              <div className="modal-close">
                <MdClose onClick={closeModal} />
              </div>
            </div>
            <div className="line"></div>
            <div className="modal-body">
              <form className="field-rows">
                <div className="field-colums">
                  <div>
                    <label htmlFor="EventName">SOCIETY NAME</label>
                  </div>
                  <div className="big-ip">
                    <input
                      type="text"
                      id="EventName"
                      placeholder="Add Society Name"
                      value={societyName}
                      onChange={() => {}}
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="EventName">EVENT NAME</label>
                  </div>
                  <div className="big-ip">
                    <input
                      type="text"
                      id="EventName"
                      value={eventName}
                      placeholder="Add Event Name"
                      onChange={(e) => setEventName(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="EventLink">EVENT REGISTRATION LINK</label>
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
                  <div>
                    <label>EVENT CATEGORY</label>
                  </div>
                  <div className="big-ip">
                    <Example category_set={category_set} />
                  </div>
                </div>
                <div className="fields">
                  <div className=" date field-colums">
                    <div>
                      <label htmlFor="date">DATE</label>
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
                  <div className="time field-colums">
                    <div>
                      <label htmlFor="time">TIME</label>
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
                  <button onClick={handleSubmit}>ADD</button>
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
  const docref = doc(db, `Events/soc_events/${socName}`, e.id);
  deleteDoc(docref);
  window.location.reload();
};

export default SocietyPage;
