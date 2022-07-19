import Heading from "./Heading";
import Card from "./Event_Card/Card.js";
import SearchBar from "./Search_Bar/searchBar";

export default function Header({ setShowNavFunc }) {
  setShowNavFunc(true);

  return (
    <div>
      <Heading />
      <SearchBar />
      {/*<Card />*/}
    </div>
  );
}
