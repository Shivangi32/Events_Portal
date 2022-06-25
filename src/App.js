import "./App.css";
import UserPage from "./UserPage/Components/UserPage";
import Navbar from "./Navbar/Navbar"
import SocietyPage from "./Society/SocietyPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  const setUpUI = (user) => {

    console.log(user);
    const loggedIN = document.querySelectorAll(".logged-in");
    const loggedOUT = document.querySelectorAll(".logged-out");
    if (user) {
      loggedIN.forEach(item => item.style.display = "inline-block !important")
      loggedOUT.forEach(item => item.style.display = "none !important")
    }
    else {
      loggedIN.forEach(item => item.style.display = "none !important")
      loggedOUT.forEach(item => item.style.display = "inline-block !important")
    }
  }
  const user = localStorage.getItem("name");
  setUpUI(user);
  return (

    <Router>
      <div className='stars'>
        <div className="twinkling">
          <div className="clouds">
            <Navbar />
            <Switch>
              <Route exact path="/" component={UserPage} />
              <Route exact path="/src/Society/SocietyPage" component={SocietyPage}>
              </Route>
            </Switch>
          </div>
        </div>
      </div>

    </Router >
  );

}

export default App;
