import React, { useState, useEffect } from "react";
// import events from "../Event_Card/Card";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

import { db } from "../../../Navbar/Register/firebaseConfig";

import {
    query,
    getDocs,
    collection,
  } from "firebase/firestore";


function SearchBar({ data }) {
    const [events, setEvents] = useState([]);

    const getData = async () => {
        const socCollection = query(collection(db, "Societies"));
        const socDocs = await getDocs(socCollection);
        const socList = socDocs.docs.map(async (socData) => {
        
            const socName = socData.data().soc;
            const socEvents = query(collection(db, `Events/soc_events/${socName}`));
            const events = await getDocs(socEvents);
        
            const eventsList = events.docs.map( (event) => {
        
                const eventName = event.data().EventName;
                setEvents(events => [...events, eventName]);
            })
        })
    }

    useEffect(() => {
        getData();
      }, [])

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = events.filter((value) => {
        console.log(events);
        console.log("value " + value);
      return value.toLowerCase().includes(searchWord.toLowerCase())
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }

    console.log(filteredData);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    return;
  };

  return (
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
  );
}

export default SearchBar;