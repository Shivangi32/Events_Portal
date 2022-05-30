import "./App.css";
// import Header from "./UserPage/Components/Header/Header";
import SocietyPage from "./Society/SocietyPage";
import UserPage from "./UserPage/Components/Header/Header";
 import { BrowserRouter as  Router } from "react-router-dom";
// import Heading from "./UserPage/Components/Header/Heading";

function App() {
  return (
    <Router>
      {/* <Header /> */}

      <div className="societyPage-background">
        <UserPage />
        <SocietyPage />
      </div>
    </Router>
  );
}

export default App;
