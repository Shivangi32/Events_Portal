import React, { useState, useEffect } from 'react';
import './Card.css';
import img from './img.PNG'
import {
    query,
    getDocs,
    collection,
    where, doc
} from "firebase/firestore";
import { db } from "../../../firebaseConfig"


export const Event = ({ event: { soc, EventName, date, time } }) => {
    return (
        <div className="event">
            <div className="event_wrapper">
                <img className="event-img" src={img}/>
                <div className='info'>
                <div className="event_name">
                    <span>{EventName.toUpperCase()}</span>
                </div>
                <div className="event_society">
                    <span className="society_name">{soc}</span>
                </div>
                
                <div className="event_date">
                    <span className="date">{date} , {time}</span>
                </div>
                <div className="event_register">
                    <button><span className='register' >REGISTER</span></button>
                </div>
                </div>
            </div>
        </div>
    )
}



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
