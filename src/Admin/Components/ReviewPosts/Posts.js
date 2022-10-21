import "./Posts.css";
import imageReview from "./imageReview.PNG";
import { useState, useEffect } from "react";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import { Event } from "./Card";

import { db } from "../../../firebaseConfig";

import { query, getDocs, collection } from "firebase/firestore";

function ReviewPosts() {
  const [InitialEvents, setInitialEvents] = useState([]);

  const eCards = [];

  const getData = async () => {
    const socCollection = query(collection(db, "Societies"));
    const socDocs = await getDocs(socCollection);
    const socList = socDocs.docs.map(async (socData) => {
      const socName = socData.data().soc;

      const socEvents = query(collection(db, `Events/soc_events/${socName}`));
      const events = await getDocs(socEvents);

      const eventsList = events.docs.map((event) => {
        const data = event.data();
        let info = {
          soc: socName,
          key: events.length,
          EventName: data.EventName,
          date: data.date,
          time: data.time,
          approved: data.approved,
          id: event.id,
        };
        console.log(info);

        if (data.approved === "false") {
          setInitialEvents((current) => [...current, info]);
        }
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  InitialEvents.forEach((e) => {
    let ca = <Event event={e} />;
    eCards.push(ca);
    console.log(e);
  });

  return (
    <>
      <div className="events">{eCards}</div>
    </>
  );
}

export default ReviewPosts;
