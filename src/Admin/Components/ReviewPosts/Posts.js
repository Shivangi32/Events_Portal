import "./Posts.css";
import imageReview from "./imageReview.PNG";
import { useState, useEffect } from "react";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import { Event } from "./Card";
import { Soc_Approve_Card } from "./Soc_Approval";
import { db } from "../../../firebaseConfig";

import { query, getDocs, collection } from "firebase/firestore";

function ReviewPosts() {
  const [InitialEvents, setInitialEvents] = useState([]);
  const [SocList, setSocList] = useState([]);

  const eCards = [];
  const socCards =[];

  const getData = async () => {
    const socCollection = query(collection(db, "Societies"));
    const socDocs = await getDocs(socCollection);
    const socList = socDocs.docs.map(async (socData) => {
      const socName = socData.data().soc.toLowerCase();
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

        if (data.approved === "false") {
          setInitialEvents((current) => [...current, info]);
        }
      });
    });

    const socCollection2 = query(collection(db, "SocietyMembers"));
    const socDocs2 = await getDocs(socCollection2);
    const socList2 = socDocs2.docs.map(async (socData) => {
      const socName = socData.data().soc;
      let soc_info={
        soc: socName,
        email: socData.data().email,
        uid: socData.data().uid,
        id: socData.id
      }
      if(socData.data().approved==false)
        setSocList((current) => [...current, soc_info]);
    
    });

  };

  useEffect(() => {
    getData();
  }, []);

  SocList.forEach((e)=>{
    let ca = <Soc_Approve_Card info={e} />;
    socCards.push(ca);
  })
  InitialEvents.forEach((e) => {
    let ca = <Event event={e} />;
    eCards.push(ca);
  });

  return (
    <>
      <div className="events">{eCards}</div>
      <div className="events">{socCards}</div>
    </>
  );
}

export default ReviewPosts;
