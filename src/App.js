import "./App.css";
// import Header from "./UserPage/Components/Header/Header";
import SocietyPage from "./Society/SocietyPage";
import UserPage from "./UserPage/Components/Header/Header";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Heading from "./UserPage/Components/Header/Heading";

function App() {
  return (
    <>
      {/* <Header /> */}

      <div className="societyPage-background">
        <UserPage />
        <SocietyPage />
      </div>
    </>
  );
}

export default App;
