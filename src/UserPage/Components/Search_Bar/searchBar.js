import React, { useState, useEffect } from "react";
// import events from "../Event_Card/Card";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { Event } from "../Event_Card/Card";
import { db } from "../../../firebaseConfig";
import DropDown from "../Tags";
import { query, getDocs, collection } from "firebase/firestore";

function SearchBar() {
  const optionsList = [];

  const [allsoc, setallsoc] = useState([]);
  const [Tag, setTag] = useState("None");
  const [InitialEvents, setInitialEvents] = useState([]);
  const [AllEvents, setAllEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [showInitialEvents, setshowInitialEvents] = useState(true);
  const [sel_cat, setselCat] = useState([]);

  const eCards = [];

  const getData = async () => {
    const socCollection = query(collection(db, "Societies"));
    const socDocs = await getDocs(socCollection);
    const socList = socDocs.docs.map(async (socData) => {
      const socName = socData.data().soc.toLowerCase();

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
          link: data.link,
          category: data.category,
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

  function sel_categories(selected) {
    setselCat([]);
    selected.forEach((cat) => {
      setselCat((current) => [...current, cat.label]);
    });
  }

  const HandleCategory = () => {
    setshowInitialEvents(false);
    setFilteredEvents([]);
    if (sel_cat.length === 0) {
      setshowInitialEvents(true);
      return;
    }

    InitialEvents.forEach((event) => {
      let flag = 1;
      sel_cat.forEach((cat) => {
        if (event.category.includes(cat) == false) flag = 0;
      });
      if (flag == 1) {
        setFilteredEvents((current) => [...current, event]);
      }
    });
  };

  const HandleSocFilter = async (tag) => {
    if (tag == "None" || tag == "Event") setInitialEvents(AllEvents);
    else {
      setInitialEvents([]);
      const tempfilter = AllEvents.filter((e) => {
        return e.soc.toLowerCase().includes(tag.toLowerCase());
      });
      setInitialEvents(tempfilter);
    }
  };

  useEffect(() => {
    HandleCategory();
  }, [InitialEvents]);

  const handleFilter = (event) => {
    setshowInitialEvents(false);
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    if (searchWord === "") {
      setFilteredEvents([]);
      if (sel_cat.length === 0) setshowInitialEvents(true);
      else {
        HandleCategory();
        setshowInitialEvents(false);
      }
      return;
    }

    if (filteredEvents.length === 0) {
      const tempfilter = InitialEvents.filter((e) => {
        return e.EventName.toLowerCase().includes(searchWord.toLowerCase());
      });
      setFilteredEvents(tempfilter);
    } else {
      const tempfilter = filteredEvents.filter((e) => {
        return e.EventName.toLowerCase().includes(searchWord.toLowerCase());
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

  const returnOptions = () => {
    let options = [<option value="None">All Events</option>];
    allsoc.forEach((item) => {
      options.push(<option value={item}>{item}</option>);
    });
    return options;
  };
  const clearInput = () => {
    setshowInitialEvents(true);
    setFilteredData([]);
    setWordEntered("");
    return;
  };

  const setTagfunc = async (event) => {
    setTag(event.target.value);
    HandleSocFilter(event.target.value);
  };
  return (
    <>
      <div className="search">
        <div className="searchInputs" style={{display:"flex", margin: "1vw", flexDirection: "column"}}>
          <div style={{display: "flex", margin: "1vw"}}>
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
                {returnOptions()}
              </select>
            </div>
          </div>

          <div id="filterCatDiv" style={{ marginLeft: "3vw", width:"40vw"}}>
            <DropDown
              sel_categories={sel_categories}
              handleCategory={HandleCategory}
            />
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
