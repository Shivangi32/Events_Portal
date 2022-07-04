import "./App.css";
import UserPage from "./UserPage/Components/UserPage";
import Navbar from "./Navbar/Navbar"
import SocietyPage from "./Society/SocietyPage.js";
import AdminPage from "./Admin/AdminPage.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  const user = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (

    <Router>
      <div className='stars'>
        <div className="twinkling">
          <div className="clouds">
            <Navbar user={user} email={email} />
            <Switch>
              <Route exact path="/" component={UserPage} />
              <Route exact path="/Society" component={SocietyPage} />
              <Route exact path="/Admin" component={AdminPage} />


            </Switch>
          </div>
        </div>
      </div>

    </Router >
  );

}

export default App;
