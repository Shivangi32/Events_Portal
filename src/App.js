import "./App.css";
import UserPage from "./UserPage/Components/UserPage";
import Navbar from "./Navbar/Navbar"
import SocietyPage from "./Society/SocietyPage";
import AdminPage from "./Admin/AdminPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {

  const user = localStorage.getItem("name");
  const email=localStorage.getItem("email");

  return (

    <Router>
      <div className='stars'>
        <div className="twinkling">
          <div className="clouds">
            <Navbar user={user} email={email} />
            <Switch>
              <Route exact path="/" component={UserPage} />
                <Route exact path="/src/Society/SocietyPage" component={SocietyPage}/>
                <Route exact path="/src/Admin/AdminPage" component={AdminPage}/>
              
              
            </Switch>
          </div>
        </div>
      </div>

    </Router >
  );

}

export default App;
