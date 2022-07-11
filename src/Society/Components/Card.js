import Modal from "react-modal";
import firebase from "../firebase";
import React, { useState , useEffect } from "react";


function Card(props) {

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

  return (
    <div className="card">
      <div className="content">
        <div className="images">
          <div className="image">
            <img src="" alt="logo" />
          </div>
          <div className="icons">
            <div className="material-icons" onClick={() => deleteEvent(event)}>close</div>
            <div className="material-icons" onClick={() => editEvent({ title: event.title, Date: event.date, time: event.timeStamp, id: event.id })}>edit</div>
          </div>
        </div>

        <div className="info">
          <h2>{props.title}</h2>
          <h1>Date: {props.date}</h1>
          <h1>Time: {props.time}</h1>
        </div>
      </div>
      <button>Register Now</button>
    </div>
  );
}

export default Card;

// class Card extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editing: false
//     };
//     this.newDate = "";
//     this.newTime = "";
//     this.newtitle = "";
//   }

//   render() {
//     const { imgSrc, cardName, birthYear, homeWorld, onEdit } = this.props;
//     return (
//       <div className="card">
//         <div className="card-content">
//           <div className="card-name">{cardName}</div>
//           <img src={`http://localhost:3008/${imgSrc}`} alt="profile" />
//           <p>
//             <span>Birthday:</span>
//             {this.state.editing ? (
//               <span className="birth-year">{birthYear}</span>
//             ) : (
//               <input
//                 type="text"
//                 defaultValue={birthYear}
//                 ref={node => {
//                   this.newbirthYear = node;
//                 }}
//               />
//             )}
//           </p>
//           <p>
//             <span>Homeworld:</span>
//             {this.state.editing ? (
//               <span className="home-world">{homeWorld}</span>
//             ) : (
//               <input
//                 type="text"
//                 defaultValue={homeWorld}
//                 ref={node => {
//                   this.newHomeWorld = node;
//                 }}
//               />
//             )}
//           </p>
//           <div align="center">
//             <button
//               onClick={() => {
//                 this.setState({ editing: true });
//               }}
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }