import Heading from "./Heading";
import Card from "./Event_Card/Card.js";
import SearchBar from "./Search_Bar/searchBar";
import Sidebar from "../../Sidebar/Sidebar";
import "./UserPage.css";

export default function Header() {

  return (
    <div>
      <Heading />
      <SearchBar />

      {/* <Card /> */}
    </div>
  );
}
