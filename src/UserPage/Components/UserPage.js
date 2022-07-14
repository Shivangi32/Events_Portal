import Heading from "./Heading";
import Card from "./Event_Card/Card.js";
import SearchBar from "./Search_Bar/searchBar";
import EventsData from "./Event_Card/data";

export default function Header({ setShowNavFunc }) {
  setShowNavFunc(true);

  return (
    <div>
      <Heading />
      <SearchBar data={EventsData} />
      <Card />
    </div>
  );
}
