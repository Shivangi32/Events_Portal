import React, { useState, useEffect } from "react";
// import events from "../Event_Card/Card";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { Event } from "../Event_Card/Card";
import { db } from "../../../firebaseConfig";

import { query, getDocs, collection } from "firebase/firestore";

function SearchBar() {
  const optionsList = [];

  const [allsoc, setallsoc] = useState([]);
  const [Tag, setTag] = useState("None");
  const [InitialEvents, setInitialEvents] = useState([]);
  const [AllEvents, setAllEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [showInitialEvents, setshowInitialEvents] = useState(true);

  const eCards = [];

  const getData = async () => {
    const socCollection = query(collection(db, "Societies"));
    const socDocs = await getDocs(socCollection);
    const socList = socDocs.docs.map(async (socData) => {
      const socName = socData.data().soc;

      setallsoc((current) => [...current, socName]);
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
          day: data.day,
          month: data.month,
          year: data.year,
        };

        if (data.approved == "true") {
          setAllEvents((current) => [...current, info]);
          setInitialEvents((current) => [...current, info]);
          const eventName = data.EventName;
          setEvents((events) => [...events, eventName]);
        }
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    setshowInitialEvents(false);
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    if (searchWord === "") {
      setshowInitialEvents(true);
      setFilteredData([]);
      return;
    }

    if (Tag == "None" || Tag == "Event") {
      const newFilter = events.filter((value) => {
        console.log("value " + value);
        return value.toLowerCase().includes(searchWord.toLowerCase());
      });

      const tempfilter = InitialEvents.filter((e) => {
        console.log(e);
        return e.EventName.toLowerCase().includes(searchWord.toLowerCase());
      });

      setFilteredEvents(tempfilter);
      setFilteredData(newFilter);
    } else if (Tag == "Society") {
      const newFilter = allsoc.filter((value) => {
        console.log("value " + value);
        return value.toLowerCase().includes(searchWord.toLowerCase());
      });

      const tempfilter = InitialEvents.filter((e) => {
        console.log(e);
        return e.soc.toLowerCase().includes(searchWord.toLowerCase());
      });

      setFilteredEvents(tempfilter);
      setFilteredData(newFilter);
    } else if (Tag == "Date") {
      const tempfilter = InitialEvents.filter((e) => {
        return e.date.toLowerCase().includes(searchWord.toLowerCase());
      });

      setFilteredEvents(tempfilter);
    }
  }; //handelfilter  close

  if (showInitialEvents) {
    InitialEvents.forEach((e) => {
      let ca = <Event event={e} key={e.id} />;
      eCards.push(ca);
    });
  }

  filteredEvents.forEach((e) => {
    let ca = <Event event={e} key={e.id} />;
    eCards.push(ca);
  });

  const clearInput = () => {
    setshowInitialEvents(true);
    setFilteredData([]);
    setWordEntered("");
    return;
  };

  const setTagfunc = (event) => {
    setTag(event.target.value);
  };
  return (
    <>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            value={wordEntered}
            placeholder="Search event"
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
            <select name="options" id="options" onChange={setTagfunc}>
              <option value="None">ALL Events</option>
              <option value="Society">Society</option>
              <option value="Date">Date</option>
            </select>
          </div>
        </div>

        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value) => {
              return <p>{value}</p>;
            })}
          </div>
        )}
      </div>
      <div className="events">{eCards}</div>
    </>
  );
}

export default SearchBar;
