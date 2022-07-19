import React, { useState, useEffect } from "react";
// import events from "../Event_Card/Card";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { Event } from "../Event_Card/Card";

import { db } from "../../../firebaseConfig";

import {
  query,
  getDocs,
  collection,
} from "firebase/firestore";


function SearchBar() {

  const optionsList=[];

  const [allsoc,setallsoc]=useState([]);
  const [InitialEvents, setInitialEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [showInitialEvents, setshowInitialEvents] = useState(true);

  const eCards = [];

  const getData = async () => {
    const socCollection = query(collection(db, "Societies"));
    const socDocs = await getDocs(socCollection);
    const socList = socDocs.docs.map(async (socData) => {

      const socName = socData.data().soc;

      setallsoc(current => [...current,socName]);
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
        };

        if (data.approved == "true")
          setInitialEvents(current => [...current, info]);

        const eventName = data.EventName;
        setEvents(events => [...events, eventName]);
      })
    })
  }

  useEffect(() => {
    getData();
  }, [])


  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {

    setshowInitialEvents(false);
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = events.filter((value) => {
      console.log("value " + value);
      return value.toLowerCase().includes(searchWord.toLowerCase())
    });

    const tempfilter = InitialEvents.filter((e) => {
      console.log(e);
      return e.EventName.toLowerCase().includes(searchWord.toLowerCase())
    })



    if (searchWord === "") {
      setshowInitialEvents(true);
      setFilteredData([]);
    } else {
      setFilteredEvents(tempfilter);
      setFilteredData(newFilter);
    }

  };

  if (showInitialEvents) {
    InitialEvents.forEach((e) => {
      let ca = <Event event={e} key={e.id} />;
      eCards.push(ca);
    });
  }

  filteredEvents.forEach((e) => {
    let ca = <Event event={e} key={e.id} />;
    eCards.push(ca);
  })

  allsoc.forEach((soc)=>{

    let option=<option value={soc}>{soc}</option>;
    optionsList.push(option);
  })


  const selectedValue=(e)=>
  {
    let curr_soc=e.target.value;
    if(curr_soc=="none")
    {
      console.log("none");
      setshowInitialEvents(true);
      setFilteredEvents([]);
      return;
    }
    setshowInitialEvents(false);
    setFilteredEvents([]);
    InitialEvents.forEach((e) => {
      
      if(e.soc==curr_soc)
      {
        setFilteredEvents(current => [...current, e]);
      }
    });
    /*
    var select = document.getElementById('options');
    if(select!=null)
    {
		var option = select.options[select.selectedIndex];
    if(option!=null)
    console.log(option.value);
    }*/
  
  }
  
  const clearInput = () => {
    setshowInitialEvents(true);
    setFilteredData([]);
    setWordEntered("");
    return;
  };

  return (
    <>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            value={wordEntered}
            placeholder="Search for an event ..."
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {wordEntered.length === 0 ? (
              <SearchIcon />
            ) : (
              <CancelIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
          <div>
            <select name="options" id="options" onChange={selectedValue}>
              <option value="none">Select value</option>
              {optionsList}
            </select>
          </div>
        </div>

        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value) => {
              return (
                <a className="dataItem" href="/">
                  <p>{value}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
      <div className="events">
        {eCards}
      </div>
    </>
  );
}

export default SearchBar;