import React from 'react';
import './StatsCard.css'
import { StatsData } from './StatsCardData';
import { db } from "../../../firebaseConfig";
import { useState, useEffect } from "react";
import {
    query,
    getDocs,
    collection,
    where, deleteDoc,
    addDoc,
    setDoc, doc
} from "firebase/firestore";
function StatsCard(fig, heading) {

    var cnt=0;

    const [eventsCount,seteventsCount]=useState(0);
    const [socCount,setsocCount]=useState(0);
    const onwindowLoad = async () => {

        const soc_collection = query(collection(db, "Societies"));
        const socdocs = await getDocs(soc_collection);
        setsocCount(socdocs.size);

        const soc_list = socdocs.docs.map(async (socData) => {

            const socName = socData.data().soc;
            const q = query(collection(db, `Events/soc_events/${socName}`));
      
            const curr_soc = await getDocs(q);
            const temp=eventsCount;
            seteventsCount((prev)=>prev+curr_soc.size);
            
          })


    }

     useEffect(() => {
        onwindowLoad();
      }, [])
    

    return (
        <div className="main">
            <div className="cardBox">

                {StatsData.map((item) => {
                    return (
                        <div className="card">
                            <div className="iconBx">
                                {item.icon}
                            </div>
                            <div>
                                <div className="numbers">{item.fig}</div>
                                <div className="cardName">{item.heading}</div>
                            </div>


                        </div>
                    )
                })}
                {eventsCount}
            </div>
        </div>





    );
}


export default StatsCard;

