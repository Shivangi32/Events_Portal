import React, { useState } from "react";
import events from "../Event_Card/Card";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return (
        value.eventname.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.society.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
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
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link}>
                <p>{value.eventname} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
