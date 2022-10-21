import React, { useState, useEffect } from "react";
import "../../../UserPage/Components/Event_Card/Card.css";
import img from "../../../UserPage/Components/Event_Card/img.PNG";
import { query, getDocs, collection, where, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { MdThumbDown, MdThumbUp, MdDelete } from "react-icons/md";
import { deleteEvent } from "../../../Society/SocietyPage";
import { approveEvent } from "../../../Society/SocietyPage";
import { updateDoc } from "firebase/firestore";

export const Event = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log(props.event.soc);

  const approveEvent = async () => {
    console.log("hi");
    let info = {
      soc: props.event.soc,
      id: props.event.id,
      EventName: props.event.EventName,
      date: props.event.date,
      //   link: EventLink,
      approved: "true",
      time: props.event.time,
    };
    const docref = doc(
      db,
      `Events/soc_events/${props.event.soc}`,
      props.event.id
    );
    await updateDoc(docref, info);
    window.location.reload();
  };

  return (
    <div className="event">
      <div className="event_wrapper">
        <img className="event-img" src={img} />
        <div className="info">
          <div className="event_name">
            <span>{props.event.EventName.toUpperCase()}</span>
          </div>
          <div className="event_society">
            <span className="society_name">
              {props.event.soc.toUpperCase()}
            </span>
          </div>
          <div className="event_date">
            <span className="date">
              {props.event.date.slice(0, 2)}{" "}
              {months[parseInt(props.event.date.slice(3, 5))]}{" "}
              {props.event.date.slice(6, 10)}, {props.event.time}
            </span>
          </div>
          <div
            className="event_register"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <button>
              <span className="register">REGISTER</span>
            </button>
            <div
              className="review-action"
              style={{ margin: "20px", gap: "10px" }}
            >
              <div className="icon review_approve">
                <MdThumbUp onClick={approveEvent} />
              </div>
              <div className="icon review_delete">
                <MdDelete onClick={() => deleteEvent(props.event)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*const Card = () => {

    const [events, setEvents] = useState([]);

    const eCards = [];

    const onwindowLoad = async () => {
        const soc_collection = query(collection(db, "Societies"));
        const socdocs = await getDocs(soc_collection);
        const soc_list = socdocs.docs.map(async (socData) => {

            const socName = socData.data().soc;
            const q = query(collection(db, `Events/soc_events/${socName}`));

            const curr_soc = await getDocs(q);
            const events_list = curr_soc.docs.map((doc) => {


                const data = doc.data();

                let info = {
                    soc: socName,
                    key: events.length,
                    EventName: data.EventName,
                    date: data.date,
                    time: data.time,
                };
                if (data.approved == "true")
                    setEvents(current => [...current, info]);
            })
        })
        return events;
    }

    useEffect(() => {
        onwindowLoad();
    }, [])

    events.forEach((e) => {
        let ca = <Event event={e} key={e.id} />;
        eCards.push(ca);
    });


    return (

        <div className="events">
            {eCards}
        </div>
    )
}

export default Card;*/
