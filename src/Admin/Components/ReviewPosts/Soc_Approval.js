import React, { useState, useEffect } from "react";
import "../../../UserPage/Components/Event_Card/Card.css";
import img from "../../../UserPage/Components/Event_Card/img.PNG";
import { query, getDocs, collection, where, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { MdThumbUp, MdDelete } from "react-icons/md";
import { deleteEvent } from "../../../Society/SocietyPage";
import { addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export const Soc_Approve_Card = (props) => {

    const approveEvent = async () => {
        let updated_info = {
            approved:true,
            soc: props.info.soc,
            uid: props.info.uid,
            email: props.info.email,
        };

        const docref = doc(db,`SocietyMembers`,props.info.id);
        await updateDoc(docref, updated_info);
        await addDoc(collection(db, `Societies`), {soc:props.info.soc});
        window.location.reload();
    };

    const deleteEvent = async (e) => {
        const socName = e.soc.toLowerCase();
        const docref = doc(db, `SocietyMembers`, e.id);
        deleteDoc(docref);
        window.location.reload();
      };
      

    return (
        <div className="event">
            <div className="event_wrapper">
                <img className="event-img" src={img} />
                <div className="info">
                    <div className="event_name">
                        <span>{props.info.soc.toUpperCase()}</span>
                    </div>
                    <div className="event_society">
                        <span className="society_name">
                            {props.info.email}
                        </span>
                    </div>
                    <div
                        className="event_register"
                        style={{ display: "flex", flexDirection: "row" }}
                    >
                        <div
                            className="review-action-soc"
                            style={{ margin: "20px", gap: "10px" }}
                        >
                            <div className="icon review_approve">
                                <MdThumbUp onClick={approveEvent} />
                            </div>
                            <div className="icon review_delete">
                                <MdDelete onClick={() => deleteEvent(props.info)} />
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
