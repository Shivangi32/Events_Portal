import "../App.css";
// import AddEventCard from "./Components/AddEventCard";
import plus from "./images/plus.png";
import Modal from "react-modal";
import { useState } from "react";
import Card from "./Components/Card";
// import EventForm from "./Components/EventForm";

Modal.setAppElement("#root");

function SocietyPage() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  let eCards = [];

  let [eventName, setEventName] = useState();
  let [date, setDate] = useState();
  let [time, setTime] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    let info = {
      EventName: eventName,
      date: date,
      time: time,
    };
    let infos = [...cards, info];
    setCards(infos);
    closeModal();
  }

  cards.forEach((c) => {
    let ca = <Card EventName={c.EventName} date={c.date} time={c.time} />;
    eCards.push(ca);
  });

  return (
    <div className="societyPage">
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
                    <label htmlFor="EventName">Event Name</label>
                  </div>
                  <div className="big-ip">
                    <input
                      type="text"
                      id="EventName"
                      placeholder="Add Event Name"
                      onChange={(e) => setEventName(e.target.value)}
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
