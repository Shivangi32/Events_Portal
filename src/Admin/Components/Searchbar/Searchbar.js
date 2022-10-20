import React from "react";
import './Searchbar.css'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(){
    return(
        <div className="admin-search">
            <div className="search">
                <div className="searchInputs">
                    <input type="text" placeholder="Search for an event ..." />
                    <div className="searchIcon">  <SearchIcon />               
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default SearchBar;